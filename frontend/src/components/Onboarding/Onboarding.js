import { styled } from 'goober'

const Onboarding = {}

Onboarding.Main = styled('main')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`

Onboarding.Button = styled('button')`
  background: var(--clr-brand);
  color: var(--clr-white);
  font-size: 1.5rem;
  padding: 1em;
  border: none;
  border-radius: var(--border-radius);

  &[disabled] {
    opacity: .7;
  }
`

Onboarding.Heading = styled('div')`
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

Onboarding.Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  min-height: 30em;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  width: max-content;
  margin-top: 2em;

  color: var(--clr-white);
  background: var(--clr-surface);
  border-radius: var(--border-radius);
`

Onboarding.Form = styled('form')`
  min-width: 20em;

  input:focus {
    background: var(--clr-background);
  }

  button {
    width: 100%;
    padding-block: .7em;
    font-size: 1.3rem;
    margin-top: .5em;
  }
`

export default Onboarding