import { styled } from 'goober'
import { MoreVertical } from 'lucide-react'

const DetailButton = () =>
  <Button><DetailIcon size={50} /></Button>

const Button = styled('button')`
  background: none;
  border: none;
  cursor: pointer;
  --icon-colour: var(--clr-brand);

  &:hover {
    --icon-colour: var(--clr-white);
  }
`

const DetailIcon = styled(MoreVertical)`
  stroke: var(--icon-colour);
`

export default DetailButton
