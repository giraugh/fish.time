import { styled } from 'goober'

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  position: relative;
  overflow: hidden;

  @media (max-width: 650px) {
    padding: .5em;
  }
`

export default Main
