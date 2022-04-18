import { useState } from 'react'
import { Play, MoreVertical, Trash, UserPlus, Pencil } from 'lucide-react'
import { useQuery, useMutation } from 'urql'
import groupBy from 'lodash.groupby'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'

import { projectColors } from '/src/utils/colors'
import { GET_MY_TIMERS_QUERY } from '/src/graphql/queries'
import { ScrollContainer, Spinner, GroupedRows, IconButton, Dropdown, Button } from '/src/components'
import { usePreferenceStore } from '/src/stores'

import { TimerRow, Tags, TimerGroupList, Tag, TimesSection, ButtonsSection, Description } from './timerListStyle'
import { DELETE_TIMER_MUTATION } from '/src/graphql/mutations'

dayjs.extend(calendar)

const calendarConfig = {
  sameDay: '[Today]',
  nextDay: '[Tomorrow]',
  nextWeek: 'ddd, DD MMM',
  lastDay: '[Yesterday]',
  lastWeek: 'ddd, DD MMM',
  sameElse: 'ddd, DD MMM',
}

const TimerList = () => {
  const [{ data, fetching }] = useQuery({ query: GET_MY_TIMERS_QUERY })
  const timers = data?.myTimers

  // Group timers by day, sort chronologically, humanize/format dates
  const timersByDay = Object.entries(groupBy(timers,
    t => dayjs(t.startTime).startOf('day').toString()
  ))
    .sort(([da], [db]) => dayjs(db).isBefore(da) ? 1 : -1)
    .map(([date, entries]) => [
      dayjs(date).calendar(null, calendarConfig),
      entries.sort((a, b) => dayjs(b).isBefore(a) ? 1 : -1)
    ])

  return fetching ? <Spinner /> : <ScrollContainer>
    <TimerGroupList>
      {timersByDay.map(([day, timers]) => <TimerGroup
        key={day}
        day={day}
        timers={timers} />)}
    </TimerGroupList>
  </ScrollContainer>
}

const TimerGroup = ({ day, timers }) => {
  return <GroupedRows title={day}>
    {timers.map(timer => <Timer key={timer.id} {...timer} />)}
  </GroupedRows>
}

const Timer = ({ id, startTime, endTime, description, project }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const use12HourTime = usePreferenceStore(s => s.use12HourTime)
  const formatTime = date =>
    dayjs(date).format(use12HourTime ? 'hh:mm a' : 'HH:mm')

  const descriptionWithoutTags = description.replace(/#\w+/g, '')
  const tags = description.match(/#(\w+)/g) ?? []

  const [, deleteTimer] = useMutation(DELETE_TIMER_MUTATION)

  return <GroupedRows.Row>
    <TimerRow>
      <Description>{descriptionWithoutTags}</Description>
      <Tags>
        {project && <Tag $always={true} $color={projectColors[project.id % projectColors.length]}>{project?.name}</Tag>}
        {tags.map(t => <Tag key={t}>{t}</Tag>)}
        {tags.length > 0 && <Tag $isCount={true}>+{tags.length}</Tag>}
      </Tags>
      <TimesSection>
        <span>{formatTime(startTime)}</span>
        {' - '}
        {endTime && <span>{formatTime(endTime)}</span>}
        {!endTime && <span>Now</span>}
      </TimesSection>
      <ButtonsSection>
        <Dropdown
          openButton={<IconButton onClick={() => setMenuIsOpen(!menuIsOpen)} subtle size={35} icon={<MoreVertical />}/>} 
          isOpen={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
          small
        >
          <Button subtle icon={<Pencil />}>Edit</Button>
          <Button danger icon={<Trash />} onClick={() => { deleteTimer({ input: { id } }); setMenuIsOpen(false) }}>Delete</Button>
        </Dropdown>
        <IconButton icon={<Play />} filled subtle size={35} />
      </ButtonsSection>
    </TimerRow>
  </GroupedRows.Row>
}

export default TimerList
