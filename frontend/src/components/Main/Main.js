import { styled } from 'goober'
import { mobileBP } from '/src/styles/breakpoints'

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  position: relative;
  max-height: 100vh;

  @media (max-width: ${mobileBP}) {
    padding: .5em;
  }
`

export default Main
