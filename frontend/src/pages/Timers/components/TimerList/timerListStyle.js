import { styled } from 'goober'

export const TimerRow = styled('div')`
  display: grid;
  grid-template-columns: 1fr max-content auto;
  column-gap: .5em;
  align-items: center;
  width: 100%;
  text-align: left;

  @media (max-width: 650px) {
    padding-block: .4em;
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
    grid-template-columns: 12ch max-content;

    ${p => p.$active && `
      grid-template-columns: 1fr;
      grid-template-rows: max-content max-content;
      max-width: 250px;
      overflow-x: scroll;
    `}
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

  ${p => p.$isCount && `
    display: none;
    color: var(--clr-surface-alt);
  `}

  @media (max-width: 650px) {
    ${p => !(p.$always || p.$isCount) && `
      display: none;
    `}
    ${p => p.$isCount && `
      display: inline;
    `} 
  }
`

export const TimesSection = styled('div')`
  display: flex;
  gap: .7ch;

  @media (max-width: 650px) {
    display: none;
    flex-direction: column;
    align-items: center;
  }
`