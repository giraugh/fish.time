import { useState, useRef } from 'react'

import { useOnClickOutside } from '/src/hooks'
import { Container, DropdownButton, Value, DropdownContainer, Heading, Input } from './dropdownStyle'

const Dropdown = ({ icon=null, value=null, color, children, onClose }) => {
  const containerRef = useRef()
  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    setIsOpen(false)
    onClose()
  }

  // Close when clicked outside of 
  useOnClickOutside(containerRef, close)

  return <Container ref={containerRef}>
    <DropdownButton $color={color} $set={value} $isOpen={children && isOpen} onClick={() => setIsOpen(!isOpen)}>
      {icon}
      <Value>{value}</Value>
    </DropdownButton>
    {children && <DropdownContainer $isOpen={isOpen}>
      {typeof children === 'function' ? children({ close }) : children}
    </DropdownContainer>}
  </Container>
}

Dropdown.Heading = Heading
Dropdown.Input = Input

export default Dropdown
