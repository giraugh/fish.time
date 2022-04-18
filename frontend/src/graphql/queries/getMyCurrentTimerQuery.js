import { TIMER_FRAGMENT, PROJECT_FRAGMENT } from '../fragments'

export const GET_MY_CURRENT_TIMER_QUERY = `
  query MyCurrentTimer {
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