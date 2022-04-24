import { Box, Briefcase, User, Type } from 'lucide-react'

import { PageHeading, Select, DropdownIconButton } from '/src/components'

import { Container, Filters, FilterLabel, TogglesRegion } from './reportsStyle'

const Reports = () => {
  return <Container>
    <PageHeading>
      <h1>Reports</h1>
    </PageHeading>
    <Filters>
      <div>
        <FilterLabel>Show</FilterLabel> 
        <Select>
          <option>This Week</option>
        </Select>
      </div>
      <div>
        <FilterLabel>Filtered by</FilterLabel> 
        <TogglesRegion>
        <DropdownIconButton icon={<Box />} />
        <DropdownIconButton icon={<Briefcase />} />
        <DropdownIconButton icon={<User />} />
        <DropdownIconButton icon={<Type />} />
        </TogglesRegion>
      </div>
      <div>
        <FilterLabel>As a</FilterLabel> 
        <Select>
          <option>Summary</option>
        </Select>
      </div>
    </Filters>
  </Container>
}

export default Reports
