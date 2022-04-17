import { styled } from 'goober'
import { forwardRef } from 'react'

export const Container = styled('div', forwardRef)`
  position: relative;
  min-width: .5em;
  min-height: .5em;
  height: 100%;
`

export const DropdownButton = styled('button')`
  display: flex;
  height: 100%;
  aspect-ratio: 1 / 1;
  align-items: center;
  justify-content: center;

  border-radius: var(--border-radius);
  border: none;
  color: var(--clr-surface-alt);
  background: none;
  cursor: pointer;
  border: 2px solid transparent;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  ${p => !p.$set && `
    aspect-ratio: 1 / 1;
    border: 2px dashed var(--clr-surface-alt);

    svg {
      stroke: var(--clr-surface-alt);
    }
  `}

  @media (min-width: 650px) {
    ${p => p.$set && `
      gap: .4em;
      padding: .4em 1em;
      aspect-ratio: initial;
    `}
  }

  ${p => (p.$set || p.$isOpen) ? '&' : '&:hover'} {
    background: var(--clr-background);
    color: var(--clr-white);
    border: 2px solid var(--clr-surface-alt);
    svg {
      stroke: var(--clr-white);
    }
  }

  ${p => p.$color && `
    & { color: ${p.$color}; }
    & svg {
      stroke: ${p.$color};
    } 
  `}
`

export const Value = styled('span')`
  font-size: 1.2rem;

  @media (max-width: 650px) {
    display: none;
  }
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