import { TIMER_FRAGMENT } from '../fragments/timerFragment'

const STOP_TIMER_MUTATION = `
  mutation StopTimer($input: StopTimerInput!) {
    stopTimer(input: $input) {
      timer {
        ...TimerFields 
      }
    }
  }
  ${TIMER_FRAGMENT}
`

export default STOP_TIMER_MUTATION