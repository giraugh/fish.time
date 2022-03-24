import { styled } from 'goober'

export const Main = styled('main')`
  padding: 1em;
`

export const TimeEntryForm = styled('div')`
  display: grid;
  grid-template-columns: auto min-content;
  column-gap: .5em;
  width: 100%;
  font-size: 1.5rem;
  color: var(--clr-white);

  &:not(:first-child) {
    flex-shrink: 2;
  }
`

export const TimeEntrySection = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0em .5em;
  height: 4em;

  background: var(--clr-surface);
  border-radius: var(--border-radius);

  input {
    font-size: inherit;
    background: none;
    border: none;
    padding: .5em;
    outline: none;
    flex: 1;
  }

  button {
    --clr-icon: var(--clr-brand);
    background: none;
    border: none;

    svg {
      stroke: var(--clr-icon);
      fill: var(--clr-icon);
    }

    &:hover {
      cursor: pointer;
      --clr-icon: hsl(var(--clr-brand-h), 100%, 80%);
    }
  }

  ${p => p.$square && `
    justify-content: center;
    aspect-ratio: 1 / 1;
  `}
`
