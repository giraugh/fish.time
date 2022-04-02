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

export const GroupTitle = styled('span')`
  color: white;
  font-size: 1.3rem;
  padding-left: 1em;
`

export const RowContainer = styled('div')`
  display: flex;
  font-size: 1.2rem;
  width: 100%;
  padding: 1em;

  color: var(--clr-white);
`
