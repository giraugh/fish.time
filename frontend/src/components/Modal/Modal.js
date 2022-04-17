import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import { useA11yDialog } from 'react-a11y-dialog'

import { Button } from '/src/components'

import { Container, Overlay, Content, InnerContent, Buttons, Heading } from './modalStyle'

const Modal = ({
  id = 'dialog',
  role = 'dialog',
  title,
  children,
  actions,
  modalRef,
  onClose,
}) => {
  const [instance, attr] = useA11yDialog({ id, role, title })

  // Setup a11y dialog
  useEffect(() => {
    if (!instance) return
    modalRef?.(instance)
    onClose && instance.on('hide', onClose)
  }, [instance, modalRef, onClose])
  
  // Render a11y dialog in a React portal
  const dialog = createPortal(
    <Container {...attr.container}>
      <Overlay {...attr.overlay} />

      <Content {...attr.dialog}>
        <InnerContent>
          <Heading {...attr.title}>{title}</Heading>

          {children}

          <Buttons>
            {actions?.(attr.closeButton, instance) ?? <Button {...attr.closeButton}>Close</Button>}
          </Buttons>
        </InnerContent>
      </Content>
    </Container>,
    document.body
  )

  return dialog
}

export default Modal