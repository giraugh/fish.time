import { styled } from 'goober'

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