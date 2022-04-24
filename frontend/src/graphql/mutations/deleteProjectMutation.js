const DELETE_PROJECT_MUTATION = `
  mutation DeleteProject($input: DeleteProjectInput!) {
    deleteProject(input: $input) {
      project {
        id
      }
    }
  }
`

export default DELETE_PROJECT_MUTATION