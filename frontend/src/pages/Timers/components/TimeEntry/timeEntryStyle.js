import { styled } from 'goober'

export const TimeEntryForm = styled('div')`
  display: grid;
  grid-template-columns: auto min-content;
  column-gap: 1em;
  width: 100%;
  font-size: 1rem;
  color: var(--clr-white);

  &:not(:first-child) {
    flex-shrink: 2;
  }
`

export const TimerButton = styled('button')`
    --clr-icon: var(--clr-brand);
    background: none;
    border: none;
    display: flex;

    svg {
      stroke: var(--clr-icon);
      fill: var(--clr-icon);
    }

    &:hover {
      cursor: pointer;
      --clr-icon: hsl(var(--clr-brand-h), 100%, 80%);
    }

    &[disabled] {
      --clr-icon: var(--clr-surface);
      svg {
        stroke: var(--clr-background);
      }
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
    min-height: 4em;
    width: 100%;
  }

  ${p => p.$square && `
    justify-content: center;
    aspect-ratio: 1 / 1;
  `}
`

export const DropDownContainer = styled('div')`
  display: flex;
  flex-direction: row;
  gap: .5em;
`
