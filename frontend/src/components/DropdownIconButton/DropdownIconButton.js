import { DropdownButton, Value } from './dropdownIconButtonStyle'

const DropdownIconButton = ({ color, value, isOpen, setIsOpen, icon }) => 
  <DropdownButton $color={color} $set={value} $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
    {icon}
    <Value>{value}</Value>
  </DropdownButton>

export default DropdownIconButton