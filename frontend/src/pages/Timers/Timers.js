import { useState, useEffect, useCallback } from 'react'
import { Play, Square } from 'lucide-react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import { Waves } from '/src/components'
import { useTimerStore } from '/src/stores'

import { Main, TimeEntryForm, TimeEntrySection, TimeHeading } from './timersStyle'

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
    <Waves />
    <TimeHeading>{timerText}</TimeHeading>
  </Main>
}

const TimeEntry = () => {
  const timerActive = useTimerStore(s => s.timerActive)
  const start = useTimerStore(s => s.start)
  const stop = useTimerStore(s => s.stop)

  const handleTimerButton = useCallback(() => {
    if (!timerActive) {
      start()
    } else {
      // TODO: record timer
      stop()
    }
  }, [timerActive])

  return <TimeEntryForm>
    <TimeEntrySection>
      <input type='text' placeholder={'What\'s Happening?'}/>
    </TimeEntrySection>
    <TimeEntrySection $square>
      <button onClick={handleTimerButton}>
        { timerActive ? <Square size={50} /> : <Play size={50} /> }
      </button>
    </TimeEntrySection>
  </TimeEntryForm>
}

export default Timers
