import { useRef, useState, useCallback } from 'react'
import { Play, Square, Box, Tag } from 'lucide-react'

import { useTimerStore } from '/src/stores'
import { SelectDropDown } from '/src/components'
import { startTimer, stopTimer } from '/src/services/timers'

import { TimeEntryForm, TimerButton, TimeEntrySection, DropDownContainer } from './timeEntryStyle'

const TimeEntry = () => {
  const [taskValue, setTaskValue] = useState('')
  const timerActive = useTimerStore(s => s.timerActive)
  const start = useTimerStore(s => s.start)
  const stop = useTimerStore(s => s.stop)

  const handleTimerButton = useCallback(async () => {
    if (!timerActive) {
      start()
      await startTimer()
    } else {
      stop()
      await stopTimer({ projectID: null, tagIDs: [] })
    }
  }, [timerActive])

  return <TimeEntryForm>
    <TimeEntrySection>
      <input
        value={taskValue}
        onChange={e => setTaskValue(e.target.value)}
        type='text'
        placeholder={'What\'s Happening?'}/>
      <DropDownContainer>
        <ProjectDropDown />
      </DropDownContainer>
    </TimeEntrySection>
    <TimeEntrySection $square>
      <TimerButton onClick={handleTimerButton}>
        { timerActive ? <Square size={50} /> : <Play size={50} /> }
      </TimerButton>
    </TimeEntrySection>
  </TimeEntryForm>
}

const ProjectDropDown = () => <SelectDropDown
  icon={<Box size={35} />}
  label='Project'
/>

export default TimeEntry
