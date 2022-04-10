import { styled } from 'goober'

export const TimerRow = styled('div')`
  display: flex;
  align-items: center;
  gap: .5em;
  width: 100%;
`

export const TimerGroupList = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-top: 1em;
` 

export const Tags = styled('div')`
  display: flex;
  align-items: center;
  gap: .25em;
`

export const Tag = styled('span')`
  width: max-content;
  padding: .2em .8em;
  font-size: .7rem;
  max-width: 120px;
  text-overflow: ellipsis;
  overflow-x: hidden;

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
  justify-content: end;
  flex: 1;

  @media (max-width: 650px) {
    display: none;
  }
`

export const ButtonsSection = styled('div')`
  display: flex;
  @media (max-width: 650px) {
    flex: 1;
    justify-content: end;
  }
`

export const Description = styled('span')`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 650px) {
    font-size: .9rem;
  }
`