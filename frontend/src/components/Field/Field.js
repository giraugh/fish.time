import { forwardRef } from 'react'
import { styled } from 'goober'

const Wrapper = styled('div')`
  margin-block-start: .5em;
  margin-block-end: 1.5em;
  position: relative;
`

const Label = styled('label')`
  display: block;
  margin-bottom: .3em;
  &::after {
    content: '${props => !props.$required ? ' (optional)' : ''}';
  }
`

const Error = styled('div')`
  color: var(--error);
  font-size: .75em;
  font-weight: 500;
`

const Input = styled('input', forwardRef)`
  padding: 1em;
  background: var(--clr-surface);
  border: none;
  outline: none;
  border-radius: var(--border-radius);
  font: inherit;
  color: inherit;
  outline: 2px solid var(--clr-surface-alt);
  margin: 0;
  width: 100%;

  &::placeholder {
    color: var(--clr-surface-alt);
    opacty: .75;
  }
`

const ErrorSpan = styled('span')`
  display: block;
  margin-block-start: .3em;
  color: red;
`

const Field = forwardRef(({ label, error, ...props }, ref) => <Wrapper>
  {label && <Label htmlFor={props.id} $required={props?.required}>{label}</Label>}
  <Input id={props.id ?? props.name} ref={ref} {...props} />
  {error && <ErrorSpan>{error}</ErrorSpan>}
</Wrapper>)

Field.Wrapper = Wrapper
Field.Label = Label
Field.Error = Error

export default Field