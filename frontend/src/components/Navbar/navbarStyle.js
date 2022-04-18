import { styled } from 'goober'

export const Nav = styled('nav')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4.5em;
  z-index: 1;

  background: var(--clr-surface);

  > img {
    margin-bottom: .7em;
    margin-top: .7em;
    width: 100%;
    padding: .5em;
  }

  a {
    --icon-clr: var(--clr-brand);
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;

    &:hover {
      background: var(--clr-surface-alt);
    }

    &.active {
      background: var(--clr-brand);
      --icon-clr: var(--clr-surface);
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction: row;
    width: inherit;
    height: 4.5em;

    a, img {
      height: 100%;
    }
  }
`

export const SidebarTab = styled(`div`)`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 100%;
  aspect-ratio: 1 / 1;

  @media screen and (max-width: 650px) {
    height: 100%;
  }
`
