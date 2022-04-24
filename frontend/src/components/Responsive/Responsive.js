import { styled } from 'goober'
import { mobileBP } from '/src/styles/breakpoints'

export const Mobile = styled('div')`
  display: contents;

  @media (min-width: ${mobileBP}) {
    display: none;
  }
`

export const Desktop = styled('div')`
  display: contents;

  @media (max-width: ${mobileBP}) {
    display: none;
  }
`