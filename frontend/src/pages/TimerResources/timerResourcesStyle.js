import { styled } from 'goober'

export const SideBySideButtons = styled('div')`
  display: flex;
  width: 100%;
  margin-top: .5em;
  padding: .5em;

  button {
    flex: 1;
    justify-content: center;
    transform: none;
    border: none;
    font-weight: bold;
  }

  button:hover {
    transform: none;
    box-shadow: none;
  }

  button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    ${p => !p.$first && `
      background: var(--clr-surface);
    `}
  }

  button:not(:first-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    ${p => !p.$second && `
      background: var(--clr-surface);
    `}
  }
`