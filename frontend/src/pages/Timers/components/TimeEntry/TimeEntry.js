import { useState, useCallback } from 'react'
import { Play, Square, Box } from 'lucide-react'

import { useTimerStore } from '/src/stores'
import { IconButton } from '/src/components'

import { TimeEntryForm, TimeEntrySection } from './timeEntryStyle'
import { ProjectDropdown } from '../'

const TimeEntry = () => {
  const [taskValue, setTaskValue] = useState('')
  const timerActive = useTimerStore(s => s.timerActive)
  const start = useTimerStore(s => s.start)
  const stop = useTimerStore(s => s.stop)

  const handleTimerButton = useCallback(async () => {
    if (!timerActive) {
      start()
      //await startTimer()
    } else {
      stop()
      //await stopTimer({ projectID: null, tagIDs: [] })
    }
  }, [timerActive])

  return <TimeEntryForm>
    <TimeEntrySection>
      <input
        value={taskValue}
        onChange={e => setTaskValue(e.target.value)}
        type='text'
        placeholder={'What\'s Happening?'}/>
      <ProjectDropdown />
    </TimeEntrySection>
    <TimeEntrySection $square>
      <IconButton
        filled
        icon={timerActive ? <Square /> : <Play />}
        size={50}
        onClick={handleTimerButton} />
    </TimeEntrySection>
  </TimeEntryForm>
}


export default TimeEntry