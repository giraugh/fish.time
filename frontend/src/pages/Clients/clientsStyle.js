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

export const HelpText = styled('span')`
  font-size: 1.1rem;
  color: var(--clr-white);
  opacity: .6;
  font-style: italic;
`

export const ClientCard = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0em 1em;
  font-size: 1.4rem;
  min-width: 14em;
  height: 3em;

  background: var(--clr-surface);
  color: var(--clr-white);
  border-radius: var(--border-radius);
`

export const ClientListContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: .5em;
  width: 100%;
  padding-top: .5em;
`
