import { styled } from 'goober'
import { forwardRef } from 'react'

const Button = ({ children, icon, secondary, loading, danger, subtle, ...props }) => <StyledButton
  $danger={danger}
  $secondary={secondary}
  $subtle={subtle}
  $icon={!!icon} {...props}>
    {icon}
    {children}
</StyledButton>

const StyledButton = styled('button', forwardRef)`
  display: flex;
  align-items: center;
  gap: .5em;
  background: var(--clr-surface-alt);
  border: none;
  border-radius: var(--border-radius);
  padding: .8em;
  cursor: pointer;
  font-size: 1.1rem;

  ${p => p.$danger && `
    & {
      background: var(--clr-danger-background);
      color: var(--clr-danger-color);
    }
  `}

  ${p => p.$subtle && `
    background: var(--clr-background);
    color: var(--clr-surface-alt);
    
    &:hover {
      transform: none;
    }
  `}

  ${p => p.$icon && `
    padding-right: 1.2em;
  `}

  ${p => p.$secondary && `
    background: var(--clr-background);
    color: var(--clr-surface-alt);
    border: 2px solid var(--clr-surface-alt);
    padding: calc(.8em - 2px);
  `}

  transition: box-shadow .05s, transform .05s;
  &:hover {
    box-shadow: 0px 4px var(--clr-surface);
    transform: translateY(-4px);
    position: relative;
    
    &::after {
      /* Prevent bouncy button movement */
      display: block;
      position: absolute;
      content: '';
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 4px;
    }
  }
`

export default Button