import { PROJECT_FRAGMENT } from '../fragments/projectFragment'

const CREATE_PROJECT_MUTATION = `
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      project {
        ...ProjectFields 
      }
    }
  }
  ${PROJECT_FRAGMENT}
`

export default CREATE_PROJECT_MUTATION