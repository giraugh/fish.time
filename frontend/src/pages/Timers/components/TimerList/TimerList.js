import { useState, useEffect } from 'react'
import { Play, MoreVertical } from 'lucide-react'
import groupBy from 'lodash.groupby'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'

import { ScrollContainer, Spinner, GroupedRows, IconButton } from '/src/components'
import { getTimers } from '/src/services'

import { TimerRow, TimerGroupList } from './timerListStyle'

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
  const [isLoading, setIsLoading] = useState(true)
  const [timers, setTimers] = useState([])

  useEffect(() => {
    getTimers()
      .then(setTimers)
      .then(() => setIsLoading(false))
  }, [])

  const timersByDay = groupBy(
    timers,
    t => dayjs(t.startTime).startOf('day').calendar(null, calendarConfig)
  )

  console.log(timersByDay)

  return isLoading ? <Spinner /> : <ScrollContainer>
    <TimerGroupList>
      {Object.entries(timersByDay).map(([day, timers]) => <TimerGroup
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

const Timer = ({ startTime, endTime, description }) => {
  const use12HourFormat = true
  const formatTime = date =>
    dayjs(date).format(use12HourFormat ? 'hh:mm a' : 'HH:mm')

  return <GroupedRows.Row>
    <TimerRow>
      <span>{description}</span>
      <span>{formatTime(startTime)} - {formatTime(endTime)}</span>
      <div>
        <IconButton icon={<MoreVertical />} subtle size={35} />
        <IconButton icon={<Play />} filled subtle size={35} />
      </div>
    </TimerRow>
  </GroupedRows.Row>
}

export default TimerList
