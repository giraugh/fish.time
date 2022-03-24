import { Play } from 'lucide-react'

import { Main, TimeEntryForm, TimeEntrySection } from './timersStyle'

const Timers = () => {
  return <Main>
    <TimeEntry />
  </Main>
}

const TimeEntry = () => {
  return <TimeEntryForm>
    <TimeEntrySection>
      <input type='text' placeholder={'What\'s Happening?'}/>
    </TimeEntrySection>
    <TimeEntrySection $square>
      <button>
        <Play size={60} />
      </button>
    </TimeEntrySection>
  </TimeEntryForm>
}

export default Timers
