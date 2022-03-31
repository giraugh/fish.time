import { styled } from 'goober'

export const Container = styled('button')`
  display: flex;
  min-width: .5em;
  min-height: .5em;
  padding: .4em;
  border-radius: var(--border-radius);
  border: none;
  color: var(--clr-surface-alt);
  background: none;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  align-items: center;
  border: 2px solid transparent;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  ${p => !p.$set && `
    aspect-ratio: 1 / 1;
    border: 2px dashed var(--clr-surface-alt);

    svg {
      stroke: var(--clr-surface-alt);
    }
  `}

  ${p => p.$set && p.$showValue && `
    gap: .4em;
    padding: .4em 1em;
    aspect-ratio: initial;
    border-radius: calc(2 * var(--border-radius));
  `}

  ${p => p.$set ? '&' : '&:hover'} {
    background: var(--clr-surface-alt);
    color: var(--clr-white);
    svg {
      stroke: var(--clr-white);
    }
  }

  @media (max-width: 650px) {
    align-items: center;
    justify-content: center;
    gap: .3em;
    padding: .4em .8em;
    aspect-ratio: initial;
    border-radius: calc(2 * var(--border-radius));

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const Label = styled('span')`
  display: none;

  @media (max-width: 650px) {
    display: inline;

    ${p => p.$hide && `
      display: none;
    `}
  }
`

export const Value = styled('span')`
  font-size: 1.2rem;

  @media (max-width: 650px) {
    font-size: 1rem;
  }
`
