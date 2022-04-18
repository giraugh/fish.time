import { styled } from 'goober'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  position: relative;
  overflow: hidden;
`

export const TimeHeading = styled('h3')`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0.3em 0.3em;
  font-size: 6.5rem;
  color: var(--clr-white);
  font-weight: normal;

  @media (max-width: 650px) {
    font-size: 4.5rem;
    padding: 0.2em 0.3em;
  }
`

