import { styled } from 'goober'
import { forwardRef } from 'react'

import { Button } from '/src/components'

export const Container = styled('div', forwardRef)`
  position: relative;
  min-width: .5em;
  min-height: .5em;
  height: 100%;
`

export const DropdownContainer = styled('div')`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: .6em;
  background: var(--clr-surface);
  border: 4px solid var(--clr-surface-alt);
  padding: 1.3em 1em;
  top: 115%;
  right: 0;
  border-radius: var(--border-radius);
  z-index: 1;
  box-shadow: -6px 7px 0px 4px var(--clr-background);

  > button:hover {
    transform: none;
  }

  ${p => p.$small && `
    padding: .8em;
  `}

  ${p => !p.$isOpen && `
    display: none;
  `}
`

export const Heading = styled('p')`
  font-size: 1.2rem;
  font-weight: 800;
  padding-right: 4em;
`

export const Input = styled('input')`
  background: var(--clr-background);
  border-radius: var(--border-radius);
  font-size: .9rem;
  padding: 1em;
  min-width: 12em;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--clr-surface-alt);
  }
` 