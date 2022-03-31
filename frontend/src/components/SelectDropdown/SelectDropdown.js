/* TODO: Element w/ a little square that has a search select style dropdown */
import { useState } from 'react'

import { Container, Value } from './selectDropdownStyle'

const SelectDropDown = ({ icon=null }) => {
  const [value, setValue] = useState(null)

  const handleOpen = () => {
    if (value) {
      setValue(null)
    } else {
      setValue('Test')
    }
  }

  return <Container $set={value} onClick={handleOpen}>
    {icon}
    <Value>{value}</Value>
  </Container>
}

export default SelectDropDown
