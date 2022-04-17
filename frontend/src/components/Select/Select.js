import { styled } from 'goober'
import { forwardRef } from 'react'

const Select = styled('select', forwardRef)`
  padding: 1em;
  background: var(--clr-surface);
  border: none;
  outline: none;
  border-radius: var(--border-radius);
  font: inherit;
  color: inherit;
  outline: 2px solid var(--clr-surface-alt);
  margin: 0;
  width: 100%;

  &::placeholder {
    color: var(--clr-surface-alt);
    opacty: .75;
  }
`

export default Select