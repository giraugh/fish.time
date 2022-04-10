import { useState, useEffect } from 'react'
import { Play, MoreVertical } from 'lucide-react'
import { useQuery } from 'urql'
import groupBy from 'lodash.groupby'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'

import { projectColors } from '/src/utils/colors'
import { GET_MY_TIMERS_QUERY } from '/src/graphql/queries'
import { ScrollContainer, Spinner, GroupedRows, IconButton } from '/src/components'
import { usePreferenceStore } from '/src/stores'

import { TimerRow, Tags, TimerGroupList, Tag, TimesSection, ButtonsSection } from './timerListStyle'

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
    .sort(([da], [db]) => dayjs(db).isBefore(da) ? -1 : 1)
    .map(([date, entries]) => [dayjs(date).calendar(null, calendarConfig), entries])

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

const Timer = ({ startTime, endTime, description, project }) => {
  const use12HourTime = usePreferenceStore(s => s.use12HourTime)
  const formatTime = date =>
    dayjs(date).format(use12HourTime ? 'hh:mm a' : 'HH:mm')

  const descriptionWithoutTags = description.replace(/#\w+/g, '')
  const tags = description.match(/#(\w+)/g) ?? []

  return <GroupedRows.Row>
    <TimerRow>
      <span>{descriptionWithoutTags}</span>
      <Tags>
        <Tag $always={true} $color={projectColors[project.id % projectColors.length]}>{project?.name}</Tag>
        {tags.map(t => <Tag key={t}>{t}</Tag>)}
        <Tag $isCount={true}>+{tags.length}</Tag>
      </Tags>
      <TimesSection>
        <span>{formatTime(startTime)}</span>
        {' - '}
        <span>{formatTime(endTime)}</span>
      </TimesSection>
      <ButtonsSection>
        <IconButton hideIfSmall={true} icon={<MoreVertical />} subtle size={35} />
        <IconButton icon={<Play />} filled subtle size={35} />
      </ButtonsSection>
    </TimerRow>
  </GroupedRows.Row>
}

export default TimerList
