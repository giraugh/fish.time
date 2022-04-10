import { CLIENT_FRAGMENT } from '../fragments'

export const GET_MY_CLIENTS_QUERY = `
  query GetMyClients {
    myClients {
      ...ClientFields
    }
  }
  ${CLIENT_FRAGMENT}
`