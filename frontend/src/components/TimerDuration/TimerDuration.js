import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import { useTimerStore } from '/src/stores'

import { Heading } from './timerDurationStyle'

const TimerDuration = () => {
  const [timerText, setTimerText] = useState('0:00:00')
  const startTime = useTimerStore(s => s.startTime)
  const active = useTimerStore(s => s.timerActive)

  // Update the timer duration every second
  useEffect(() => {
    if (startTime !== null) {
      setTimerText(dayjs.duration(new Date() - startTime).format('H:mm:ss'))
      const timer = setInterval(() => {
        setTimerText(dayjs.duration(new Date() - startTime).format('H:mm:ss'))
      }, 200)
      return () => clearInterval(timer)  
    } else {
      setTimerText('0:00:00')
    }
  }, [startTime])

  return <Heading $active={active}>{timerText}</Heading>
}

export default TimerDuration
