import { styled } from 'goober'

export const Wrapper = styled('div')``

export const Group = styled('div')`
  background: var(--clr-surface);
  border-radius: var(--border-radius);

  ${p => p.$multiple && `
    >:not(:last-child) {
      border-bottom: 3px solid var(--clr-background);
    }
  `}
`

export const GroupTitle = styled('div')`
  color: var(--clr-white);
  font-size: 1rem;
  padding-left: 1em;
  opacity: .8;
  padding-bottom: .2em;
`

export const RowContainer = styled('div')`
  display: flex;
  font-size: 1.1rem;
  width: 100%;
  padding: .5em .8em;

  color: var(--clr-white);
`
