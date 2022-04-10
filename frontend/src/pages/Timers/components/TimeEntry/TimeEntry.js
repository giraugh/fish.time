import { useState, useCallback } from 'react'
import { Play, Square, Box } from 'lucide-react'

import { useTimerStore } from '/src/stores'
import { SelectDropDown, IconButton } from '/src/components'

import { TimeEntryForm, TimeEntrySection } from './timeEntryStyle'

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
      <ProjectDropDown />
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

const ProjectDropDown = () => <SelectDropDown
  icon={<Box size={35} />}
  label='Project'
/>

export default TimeEntry
