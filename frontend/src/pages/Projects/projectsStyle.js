import { styled } from 'goober'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
`

export const HeadingContainer = styled('div')`
  display: flex;
  gap: 1em;

  h1 {
    color: var(--clr-white);
    font-size: 2.5rem;
  }
`

export const Heading = styled('h1')``

export const Button = styled('button')`
  background: var(--clr-surface-alt);
  border: none;
  border-radius: var(--border-radius);
  padding: 1em;
`

export const ProjectGroupList = styled('div')`

`

export const ProjectRow = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  text-align: left;
`

export const ProjectName = styled('span')`
  font-weight: bold;
`

export const DetailButton = styled('button')`
  background: none;
  border: none;

  svg {
    stroke: var(--clr-brand);
  }
`
