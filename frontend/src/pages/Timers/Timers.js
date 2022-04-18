import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import { Container } from './timersStyle'
import { TimeEntry, TimerList } from './components'

dayjs.extend(duration)

const Timers = () => <Container>
  <TimeEntry />
  <TimerList />
</Container>

export default Timers
