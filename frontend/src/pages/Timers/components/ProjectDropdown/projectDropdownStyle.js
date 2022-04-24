import { styled } from 'goober'
import { mobileBP } from '/src/styles/breakpoints'

export const ProjectRow = styled('div')`
  width: 100%;
  background: var(--clr-surface);
  border: 2px dashed var(--clr-surface-alt);
  padding: .6em;
  border-radius: var(--border-radius);
  cursor: pointer;

  ${p => p.$selected && `
    border: 2px solid var(--clr-surface-alt);
    background: var(--clr-background);
  `}

  ${p => p.$color && `
    color: ${p.$color}; 
  `}
`

export const ProjectGroup = styled('div')`
  display: flex;
  flex-direction: column;
  gap: .4em;  

  &:not(:first-of-type) {
    margin-top: .7em;
  }
  span {
    text-transform: uppercase;
    letter-spacing: .11ch;
    font-size: .9rem;
    padding-block: 0.2em;
    display: block;
    opacity: .75;
    color: var(--clr-surface-alt);
    font-weight: 800;
  }
`

export const GroupContainer = styled('div')`
  max-height: 25em;
  overflow-y: auto;
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
