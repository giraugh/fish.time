import { styled } from 'goober'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;

  @media (max-width: 650px) {
    padding: .5em;
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
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-top: 1em;
`

export const ProjectRow = styled('div')`
  display: grid;
  grid-template-columns: 2fr 1fr auto;
  align-items: center;
  width: 100%;
  text-align: left;

  > :first-child {
    padding-right: 1em;
  }

  @media (max-width: 650px) {

  }
`

export const ProjectName = styled('span')`
  display: flex;
  align-items: center;
  gap: 1em;
  font-weight: bold;

  ${p => p.$color && `
    color: ${p.$color}; 
  `}
`

export const ShareSpan = styled('span')``

export const HelpText = styled('span')`
  font-size: 1.1rem;
  color: var(--clr-white);
  opacity: .6;
  font-style: italic;
`
