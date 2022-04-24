import { styled } from 'goober'
import { mobileBP } from '/src/styles/breakpoints'

export const Heading = styled('h3')`
  position: fixed;
  right: 0;
  bottom: -15px;
  padding: 0.3em 0.3em;
  font-size: 6.5rem;
  color: var(--clr-white);
  font-weight: normal;
  opacity: 0;
  transition: opacity .5s;
  text-shadow: 0px 3px #9bb3d2;

  @media (max-width: ${mobileBP}) {
    font-size: 4.5rem;
    padding: 0.2em 0.3em;
  }

  ${p => p.$active && `
    opacity: 1;
  `}
`
