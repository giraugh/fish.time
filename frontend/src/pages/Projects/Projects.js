import { useState, useEffect } from 'react'
import { User, Users, MoreVertical } from 'lucide-react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

import { Spinner, IconButton, ScrollContainer, GroupedRows } from '/src/components'

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
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    /*getProjects()
      .then(setProjects)
      .then(() => setIsLoading(false))*/
  }, [])

  const projectGroups = Array.from(new Set(projects.map(p => p.clientID)))
    .map(clientID => [clientID, projects.filter(p => p.clientID === clientID)])

  return isLoading ? <Spinner /> : <Container>
    <HeadingContainer>
      <Heading>Projects</Heading>
      <Button>New Project</Button>
    </HeadingContainer>  
    <ScrollContainer>
      <HelpText>{!projects?.length && 'No projects here yet!'}</HelpText>
      <ProjectGroupList>
        {projectGroups.map(([clientID, projects]) => <ProjectGroup
          key={clientID}
          clientID={clientID}
          projects={projects}/>)}
      </ProjectGroupList>
    </ScrollContainer>
  </Container>
}

const ProjectGroup = ({ clientID, projects }) => {
  return <GroupedRows title={clientID}>
    {projects.map(project => <Project key={project.id} {...project}/>)}
  </GroupedRows>
}

const Project = ({ name, totalDuration, isShared }) => {
  const duration = dayjs.duration(totalDuration, 'minutes').humanize()

  return <GroupedRows.Row>
    <ProjectRow>
      <ProjectName>
        {isShared ? <Users size={35} /> : <User size={35} />}
        {name}
      </ProjectName>
      <span>{duration}</span>
      <IconButton icon={<MoreVertical />} size={35} />
    </ProjectRow>
  </GroupedRows.Row>
}

export default Projects
