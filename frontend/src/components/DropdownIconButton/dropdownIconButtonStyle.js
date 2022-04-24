import { styled } from 'goober'
import { mobileBP } from '/src/styles/breakpoints'

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

  @media (min-width: ${mobileBP}) {
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

  @media (max-width: ${mobileBP}) {
    display: none;
  }
`