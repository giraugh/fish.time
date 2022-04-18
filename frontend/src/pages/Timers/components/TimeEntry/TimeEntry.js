import { Play, Square } from 'lucide-react'

import { IconButton } from '/src/components'

import { TimeEntryForm, TimeEntrySection } from './timeEntryStyle'
import { ProjectDropdown } from '../'
import { useCurrentTimer } from '../../hooks'

const TimeEntry = () => {
  const {
    handleTimerButton,
    description,
    setDescription,
    projectValue,
    setProjectValue,
    timerActive,
    currentTimer
  } = useCurrentTimer()

  return <TimeEntryForm>
    <TimeEntrySection>
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        type='text'
        placeholder={'What\'s Happening?'}/>
      <ProjectDropdown value={projectValue} onChange={setProjectValue} />
    </TimeEntrySection>
    <TimeEntrySection $square>
      <IconButton
        filled
        icon={timerActive ? <Square /> : <Play />}
        disabled={timerActive && !currentTimer?.id}
        size={50}
        onClick={handleTimerButton} />
    </TimeEntrySection>
  </TimeEntryForm>
}


export default TimeEntry