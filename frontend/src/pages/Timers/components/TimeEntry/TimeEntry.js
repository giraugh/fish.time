import { useRef, useState, useCallback } from 'react'
import { Play, Square, Briefcase, Tag } from 'lucide-react'

import { useTimerStore } from '/src/stores'
import { SelectDropDown } from '/src/components'
import { startTimer, stopTimer } from '/src/services/timers'

import { TimeEntryForm, TimerButton, TimeEntrySection, DropDownContainer } from './timeEntryStyle'

const TimeEntry = () => {
  const [hasFocus, setHasFocus] = useState(false)
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
    <TimeEntrySection
      onFocus={() => setHasFocus(true)}
      onBlur={() => setHasFocus(false)}
    >
      <input
        value={taskValue}
        onChange={e => setTaskValue(e.target.value)}
        type='text'
        placeholder={'What\'s Happening?'}/>
      <DropDownContainer $hasFocus={hasFocus}>
        <ProjectDropDown />
        <TagDropDown />
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
  icon={<Briefcase size={35} />}
  label='Project'
/>

const TagDropDown = () => <SelectDropDown
  icon={<Tag size={35} />}
  label='Tags'
  multiple
/>

export default TimeEntry
