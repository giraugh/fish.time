import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import { Waves } from '/src/components'
import { useTimerStore } from '/src/stores'

import { Main, TimeHeading } from './timersStyle'
import { TimeEntry, TimerList } from './components'

dayjs.extend(duration)

const Timers = () => {
  const [timerText, setTimerText] = useState('0:00:00')
  const startTime = useTimerStore(s => s.startTime)

  // Update the timer duration every second
  useEffect(() => {
    if (startTime !== null) {
      setTimerText(dayjs.duration(new Date() - startTime).format('H:mm:ss'))
      const timer = setInterval(() => {
        setTimerText(dayjs.duration(new Date() - startTime).format('H:mm:ss'))
      }, 1000)
      return () => clearInterval(timer)  
    }
  }, [startTime])

  return <Main>
    <TimeEntry />
    <TimerList />
    <Waves />
    <TimeHeading>{timerText}</TimeHeading>
  </Main>
}


export default Timers
