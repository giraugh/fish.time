import { useState, useEffect } from 'react'
import { MoreVertical } from 'lucide-react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

import { getProjects } from '/src/services'
import { ScrollContainer, GroupedRows } from '/src/components'

import {
  Container,
  HeadingContainer,
  Heading,
  Button,
  ProjectGroupList,
  ProjectRow,
  DetailButton,
  ProjectName,
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
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
      .then(setProjects)
  }, [])

  const projectGroups = Array.from(new Set(projects.map(p => p.clientID)))
    .map(clientID => [clientID, projects.filter(p => p.clientID === clientID)])

  return <>
    <Container>
      <HeadingContainer>
        <Heading>Projects</Heading>
        <Button>New Project</Button>
      </HeadingContainer>  
      <ScrollContainer>
        <ProjectGroupList>
          {projectGroups.map(([clientID, projects]) => <ProjectGroup
            key={clientID}
            clientID={clientID}
            projects={projects}/>)}
        </ProjectGroupList>
      </ScrollContainer>
    </Container>
  </>
}

const ProjectGroup = ({ clientID, projects }) => {
  return <GroupedRows title={clientID}>
    {projects.map(project => <Project key={project.id} {...project}/>)}
  </GroupedRows>
}

const Project = ({ name, timerDuration }) => {
  const duration = dayjs.duration(timerDuration, 'minutes').humanize()

  return <GroupedRows.Row>
    <ProjectRow>
      <ProjectName>{name}</ProjectName>
      <span>{duration}</span>
      <DetailButton><MoreVertical size={40}/></DetailButton>
    </ProjectRow>
  </GroupedRows.Row>
}

export default Projects
