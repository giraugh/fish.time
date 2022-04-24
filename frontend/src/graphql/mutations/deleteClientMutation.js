const DELETE_CLIENT_MUTATION = `
  mutation DeleteClient($input: DeleteClientInput!) {
    deleteClient(input: $input) {
      client {
        id
      }
    }
  }
`

export default DELETE_CLIENT_MUTATION