import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import { Main } from '/src/components'
import { TimeEntry, TimerList } from './components'

dayjs.extend(duration)

const Timers = () => <Main>
  <TimeEntry />
  <TimerList />
</Main>

export default Timers
