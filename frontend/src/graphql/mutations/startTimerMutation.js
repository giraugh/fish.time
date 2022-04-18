import { PROJECT_FRAGMENT } from '../fragments/projectFragment'
import { TIMER_FRAGMENT } from '../fragments/timerFragment'

const START_TIMER_MUTATION = `
  mutation StartTimer($input: StartTimerInput!) {
    startTimer(input: $input) {
      timer {
        ...TimerFields 
        project {
          ...ProjectFields
        }
      }
    }
  }
  ${TIMER_FRAGMENT}
  ${PROJECT_FRAGMENT}
`

export default START_TIMER_MUTATION