import { TIMER_FRAGMENT, PROJECT_FRAGMENT } from '../fragments'

export const GET_MY_TIMERS_QUERY = `
  query GetMyTimers {
    myTimers {
      ...TimerFields
      project {
        ...ProjectFields
      }
    }
  }
  ${TIMER_FRAGMENT}
  ${PROJECT_FRAGMENT}
`