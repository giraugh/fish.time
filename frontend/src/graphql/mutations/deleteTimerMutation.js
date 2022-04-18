import { PROJECT_FRAGMENT } from '../fragments/projectFragment'
import { TIMER_FRAGMENT } from '../fragments/timerFragment'

const DELETE_TIMER_MUTATION = `
  mutation DeleteTimer($input: DeleteTimerInput!) {
    deleteTimer(input: $input) {
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

export default DELETE_TIMER_MUTATION