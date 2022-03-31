/* TODO: Element w/ a little square that has a search select style dropdown */
import { useState } from 'react'

import { Container, Label, Value } from './selectDropdownStyle'

const SelectDropDown = ({ label='', icon=null, multiple=false }) => {
  const [value, setValue] = useState('')

  return <Container $set={value} $showValue={!multiple} onClick={() => setValue(multiple ? ['Test', 'Test'] : 'Test')}>
    {icon}
    <Label $hide={value && !multiple}>{value && multiple ? `(${value.length})` : ''} {label}</Label>
    {!multiple && <Value>{value}</Value>}
  </Container>
}

export default SelectDropDown
