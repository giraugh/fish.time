import { Play } from 'lucide-react'

import { Waves } from '/src/components'

import { Main, TimeEntryForm, TimeEntrySection } from './timersStyle'

const Timers = () => {
  return <Main>
    <TimeEntry />
    <Waves />
  </Main>
}

const TimeEntry = () => {
  return <TimeEntryForm>
    <TimeEntrySection>
      <input type='text' placeholder={'What\'s Happening?'}/>
    </TimeEntrySection>
    <TimeEntrySection $square>
      <button>
        <Play size={50} />
      </button>
    </TimeEntrySection>
  </TimeEntryForm>
}

export default Timers
