import { styled } from 'goober'
import { MoreVertical } from 'lucide-react'

const IconButton = ({ icon = <MoreVertical/>, filled = false, size = '50px', subtle = false, ...props }) =>
  <Button
    $filled={filled}
    $subtle={subtle}
    $size={typeof size === 'number' ? `${size}px` : size}
    {...props}>
    {icon}
  </Button>

const Button = styled('button')`
  background: none;
  border: none;
  cursor: pointer;
  --icon-colour: var(--clr-brand);

  &:hover {
    --icon-colour: var(--clr-white);
  }

  svg {
    stroke: var(--icon-colour);
    width: ${p => p.$size};
    height: ${p => p.$size};

    ${p => p.$filled && `
      fill: var(--icon-colour);
    `}
  }

  /* Subtle Effects */

  ${p => p.$subtle && `
    --icon-colour: var(--clr-background);
    svg {
      fill: none;
    }

    &:hover {
      --icon-colour: var(--clr-brand);
    }
  `}

  ${p => p.$subtle && p.$filled && `
    &:hover {
      svg {
        fill: var(--icon-colour);
      }
    }
  `}
`

export default IconButton
