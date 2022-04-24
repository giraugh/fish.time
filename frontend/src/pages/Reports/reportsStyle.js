import { styled } from 'goober'
import { mobileBP } from '/src/styles/breakpoints'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;

  @media (max-width: ${mobileBP}) {
    padding: .5em;
  }
`

export const Filters = styled('div')`
  display: flex;
  padding: 1em;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 2em;

  background: var(--clr-surface);
  border-radius: var(--border-radius);

  > div {
    display: flex;
    align-items: center;
    gap: 1em;
    height: 100%;
    flex: 1;
  }

  select {
    width: max-content;
    color: var(--clr-white);
    background: var(--clr-surface-alt);
    flex: 1;
  }
`

export const FilterLabel = styled('span')`
  color: var(--clr-surface-alt);
  width: max-content;
`

export const TogglesRegion = styled('div')`
  display: flex;
  gap: .5em;
  height: 100%;
  width: max-content;
  min-width: 14rem;
`