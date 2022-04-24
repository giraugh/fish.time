import { USER_FRAGMENT } from '../fragments/userFragment'

const CREATE_USER_MUTATION = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        ...UserFields
      }
    }
  }
  ${USER_FRAGMENT}
`

export default CREATE_USER_MUTATION