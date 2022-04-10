import { styled } from 'goober'

export const TimerRow = styled('div')`
  display: grid;
  grid-template-columns: 1fr max-content auto;
  column-gap: .5em;
  align-items: center;
  width: 100%;
  text-align: left;

  > :first-child {
    padding-right: 1em;
  }

  @media (max-width: 650px) {
    padding: .5em;
  }
`

export const TimerGroupList = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-top: 1em;
` 

export const TitleSection = styled('div')`
  display: grid;
  grid-template-columns: max-content max-content;
  row-gap: .5em;
  column-gap: 1em;
  align-items: center;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;
    max-width: 250px;
    overflow-x: scroll;
  }
`

export const Tags = styled('div')`
  display: flex;
  gap: .25em;
`

export const Tag = styled('span')`
  width: max-content;
  padding: .2em .8em;
  font-size: .8rem;
  word-break: break-all;

  color: lightgreen;
  border-radius: calc(2 * var(--border-radius));
  background: var(--clr-background);

  ${p => p.$color && `
    color: ${p.$color};
  `}
`