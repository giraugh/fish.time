import { useQuery } from 'urql'
import { User, Users, MoreVertical } from 'lucide-react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

import { projectColors } from '/src/utils/colors'
import { Spinner, IconButton, ScrollContainer, GroupedRows } from '/src/components'
import { GET_MY_PROJECTS_QUERY } from '/src/graphql/queries'

import {
  Container,
  HeadingContainer,
  Heading,
  Button,
  ProjectGroupList,
  ProjectRow,
  ProjectName,
  HelpText,
} from './projectsStyle'

dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '5s',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1mth',
    MM: '%dmth',
    y: '1y',
    yy: '%dy'
  }
})

const Projects = () => {
  const [{ data, fetching }] = useQuery({ query: GET_MY_PROJECTS_QUERY })
  const projects = data?.myProjects ?? []

  if (fetching)
    return <Spinner />

  const projectGroups = Array.from(new Set((projects ?? []).map(p => p.client?.id)))
    .map(clientID => [
      projects.find(p => p.client?.id === clientID)?.client?.name || 'No Client',
      projects.filter(p => p?.client?.id === clientID)
    ])

  return <Container>
    <HeadingContainer>
      <Heading>Projects</Heading>
      <Button>New Project</Button>
    </HeadingContainer>  
    <ScrollContainer>
      <HelpText>{!projects?.length && 'No projects here yet!'}</HelpText>
      <ProjectGroupList>
        {projectGroups.map(([clientName, projects]) => <ProjectGroup
          key={clientName}
          clientName={clientName}
          projects={projects}/>)}
      </ProjectGroupList>
    </ScrollContainer>
  </Container>
}

const ProjectGroup = ({ clientName, projects }) => {
  return <GroupedRows title={clientName}>
    {projects.map(project => <Project key={project.id} {...project}/>)}
  </GroupedRows>
}

const Project = ({ id, name, totalDuration, isShared }) => {
  const duration = dayjs.duration(totalDuration, 'seconds').humanize()

  return <GroupedRows.Row>
    <ProjectRow>
      <ProjectName $color={projectColors[id % projectColors.length]}>
        {isShared ? <Users size={35} /> : <User size={35} />}
        {name}
      </ProjectName>
      <span>{duration}</span>
      <IconButton icon={<MoreVertical />} size={35} />
    </ProjectRow>
  </GroupedRows.Row>
}

export default Projects
