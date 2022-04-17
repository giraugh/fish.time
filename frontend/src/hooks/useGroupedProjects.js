import { useQuery } from 'urql'
import { GET_MY_PROJECTS_QUERY } from '/src/graphql/queries'

const useGroupedProjects = ({ nullGroupName='No Client', projectsFilter }={}) => {
  const [{ data, fetching, error }] = useQuery({ query: GET_MY_PROJECTS_QUERY })
  const projects = data?.myProjects ?? []

  const filteredProjects = projectsFilter
    ? projects?.filter(projectsFilter)
    : projects

  const projectGroups = Array.from(new Set((filteredProjects ?? []).map(p => p.client?.id)))
    .map(clientID => [
      projects.find(p => p.client?.id === clientID)?.client?.name || nullGroupName,
      projects.filter(p => p?.client?.id === clientID)
    ])

  return { projects, filteredProjects, projectGroups, fetching, error }
}

export default useGroupedProjects