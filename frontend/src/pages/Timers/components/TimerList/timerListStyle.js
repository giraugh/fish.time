import { styled } from 'goober'

export const TimerRow = styled('div')`
  display: grid;
  grid-template-columns: max-content 1fr max-content auto;
  column-gap: 2em;
  align-items: center;
  width: 100%;
  text-align: left;

  > :first-child {
    padding-right: 1em;
  }
`

export const TimerGroupList = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-top: 1em;
` 

export const TimerProject = styled('span')`
  width: max-content;
  padding: .2em .8em;
  color: lightgreen;
  border-radius: calc(2 * var(--border-radius));
  background: var(--clr-background);
`
