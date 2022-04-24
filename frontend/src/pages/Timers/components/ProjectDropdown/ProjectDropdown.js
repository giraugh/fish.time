import { useState } from 'react'
import { Box } from 'lucide-react'

import { Dropdown, DropdownIconButton } from '/src/components'
import { projectColors } from '/src/utils/colors'
import { useGroupedProjects } from '/src/hooks'

import { ProjectRow, ProjectGroup, GroupContainer } from './projectDropdownStyle'

const ProjectDropdown = ({ value=null, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState('')
  const { projectGroups } = useGroupedProjects({
    nullGroupName: 'NOCLIENT',
    projectsFilter: project => (value?.id === project.id) || project?.name?.toLowerCase().includes(filter.toLowerCase())
  })

  return <Dropdown
    label='Project'
    isOpen={isOpen}
    onClose={() => { setIsOpen(false); setFilter('') }}
    openButton={
      <DropdownIconButton
        color={value && projectColors[value?.id % projectColors.length]}
        value={value?.name}
        icon={<Box size={35} />}
        isOpen={isOpen}
        setIsOpen={isOpen => {
          setIsOpen(isOpen)
          if (!isOpen)
            setFilter('')
        }} />
    }
  >
    {({ close }) => <>
      <Dropdown.Input
        type='search'
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder='Search for projects' />
      <GroupContainer>
        {projectGroups.map(([ clientName, projects ]) => <ProjectGroup key={clientName}>
          {clientName !== 'NOCLIENT' && <span>{clientName}</span>}
          {clientName === 'NOCLIENT' && <ProjectRow
            $selected={value === null}
            key={null}
            onClick={() => { onChange(null); close() }} 
            >No Project</ProjectRow>}
          {projects.map(project => <ProjectRow
            key={project.id}
            $selected={value?.id === project?.id}
            $color={projectColors[project.id % projectColors.length]}
            onClick={() => { onChange(project); close() }}>
              {project.name} 
          </ProjectRow>)} 
        </ProjectGroup>)}
      </GroupContainer>
    </>}
  </Dropdown>
}

export default ProjectDropdown