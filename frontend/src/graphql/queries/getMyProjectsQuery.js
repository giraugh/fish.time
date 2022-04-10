import { PROJECT_FRAGMENT, CLIENT_FRAGMENT } from '../fragments'

export const GET_MY_PROJECTS_QUERY = `
  query GetMyProjects {
    myProjects {
      ...ProjectFields
      client {
        ...ClientFields
      }
    }
  }
  ${PROJECT_FRAGMENT}
  ${CLIENT_FRAGMENT}
`