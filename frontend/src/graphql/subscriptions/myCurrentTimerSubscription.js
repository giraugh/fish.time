import { TIMER_FRAGMENT, PROJECT_FRAGMENT } from '../fragments/'

const MY_CURRENT_TIMER_SUBSCRIPTION = `
  subscription MyCurrentTimer {
    myCurrentTimer {
      ...TimerFields
      project {
        ...ProjectFields
      }
    }
  }
  ${TIMER_FRAGMENT}
  ${PROJECT_FRAGMENT}
`

export default MY_CURRENT_TIMER_SUBSCRIPTION