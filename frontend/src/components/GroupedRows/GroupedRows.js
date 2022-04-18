import { Wrapper, Group, RowContainer, GroupTitle } from './groupedRowsStyle'

const GroupedRows = ({ title, children }) => <Wrapper>
  <GroupTitle>{title}</GroupTitle>
  <Group $multiple={children?.length > 1}>
    {children}
  </Group>
</Wrapper>

const Row = ({ children }) => <RowContainer>
  {children}
</RowContainer>

GroupedRows.Row = Row
export default GroupedRows
