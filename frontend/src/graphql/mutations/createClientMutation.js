import { CLIENT_FRAGMENT } from '../fragments/clientFragment'

const CREATE_CLIENT_MUTATION = `
  mutation CreateClient($input: CreateClientInput!) {
    createClient(input: $input) {
      client {
        ...ClientFields 
      }
    }
  }
  ${CLIENT_FRAGMENT}
`

export default CREATE_CLIENT_MUTATION