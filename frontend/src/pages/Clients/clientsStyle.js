import { styled } from 'goober'
import { mobileBP } from '/src/styles/breakpoints'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;

  @media (max-width: ${mobileBP}) {
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
  padding-right: .5em;
  font-size: 1.4rem;
  min-width: 14em;
  padding-block: .5em;

  background: var(--clr-surface);
  color: var(--clr-white);
  border-radius: var(--border-radius);

  @media (max-width: ${mobileBP}) {
    width: 100%;
  }
`

export const ClientListContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: .5em;
  width: 100%;
  padding-top: .5em;
`
