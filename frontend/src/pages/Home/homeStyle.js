import { styled } from 'goober'

export const PageMain = styled('main')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em;
  position: relative;
  overflow: hidden;
`

export const ActionButton = styled('button')`
  background: var(--clr-brand);
  color: var(--clr-white);
  font-size: 1.5rem;
  padding: 1em;
  border: none;
  border-radius: var(--border-radius);
`

export const Heading = styled('div')`
  display: grid;
  grid-template-rows: 9em auto;
  row-gap: 1.5em;
  align-items: center;
  justify-content: center;
  min-width: 15em;

  h1 {
    font-size: 3rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`

export const ContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 6em;
  align-items: center;
  padding: 2em;
  width: max-content;
  margin-top: 2em;

  color: var(--clr-white);
  background: var(--clr-surface);
  border-radius: var(--border-radius);
`
