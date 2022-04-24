import { styled } from 'goober'
import { mobileBP } from '/src/styles/breakpoints'

const PageHeading = styled('div')`
  display: flex;
  gap: 1em;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: var(--clr-white);
    font-size: 2.5rem;
  }

  @media (max-width: ${mobileBP}) {
    margin-top: .5em;
  }
`

export default PageHeading 
