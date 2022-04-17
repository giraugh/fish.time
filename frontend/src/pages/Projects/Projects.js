import { User, Users, MoreVertical } from 'lucide-react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

import { projectColors } from '/src/utils/colors'
import { Spinner, IconButton, ScrollContainer, GroupedRows } from '/src/components'
import { useGroupedProjects } from '/src/hooks'

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
import { useGroupedProjects } from '../../hooks'

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
  const { projects, projectGroups, fetching } = useGroupedProjects()

  if (fetching)
    return <Spinner />

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
