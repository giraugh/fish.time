import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import { useTimerStore } from '/src/stores'

import { Heading } from './timerDurationStyle'

const TimerDuration = () => {
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

  return <Heading>{timerText}</Heading>
}

export default TimerDuration
