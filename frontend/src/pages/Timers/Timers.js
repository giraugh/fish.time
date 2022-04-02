import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import { TimeEntry, TimerList } from './components'

dayjs.extend(duration)

const Timers = () => <>
  <TimeEntry />
  <TimerList />
</>

export default Timers
