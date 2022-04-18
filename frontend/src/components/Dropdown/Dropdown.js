import { useState, useRef } from 'react'

import { useOnClickOutside } from '/src/hooks'
import { Container, DropdownContainer, Heading, Input } from './dropdownStyle'

const Dropdown = ({ isOpen, onClose, children, small=false, openButton=null }) => {
  const containerRef = useRef()

  // Close when clicked outside of 
  useOnClickOutside(containerRef, onClose)

  return <Container ref={containerRef}>
    {openButton}
    {children && <DropdownContainer $small={small} $isOpen={isOpen}>
      {typeof children === 'function' ? children({ close: onClose }) : children}
    </DropdownContainer>}
  </Container>
}

Dropdown.Heading = Heading
Dropdown.Input = Input

export default Dropdown
