import { styled } from 'goober'
import { MoreVertical } from 'lucide-react'
import { mobileBP } from '/src/styles/breakpoints'

const IconButton = ({ icon = <MoreVertical/>, filled = false, size = '50px', subtle = false, hideIfSmall, ...props }) =>
  <Button
    $filled={filled}
    $subtle={subtle}
    $hideIfSmall={hideIfSmall}
    $size={typeof size === 'number' ? `${size}px` : size}
    {...props}>
    {icon}
  </Button>

const Button = styled('button')`
  background: none;
  border: none;
  cursor: pointer;
  --icon-colour: var(--clr-brand);

  &:not([disabled]):hover {
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
    &:not([disabled]):hover {
      svg {
        fill: var(--icon-colour);
      }
    }
  `}

  &[disabled] {
    opacity: .3;
    cursor: default;
  }
 
  @media (max-width: ${mobileBP}) {
    ${p => p.$hideIfSmall && `
      display: none; 
    `}
  }
`

export default IconButton
