import { USER_FRAGMENT } from '../fragments'

export const GET_USER_QUERY = `
  query GetUser($id: ID!) {
    user(id: $id) {
      ...UserFields
    }
  }
  ${USER_FRAGMENT}
`