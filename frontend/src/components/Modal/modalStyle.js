import { styled } from 'goober'
import { forwardRef } from 'react'

import { mobileBP  } from '/src/styles/breakpoints'

export const Container = styled('div', forwardRef)`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  opacity: 1;
  visibility: visible;
  transition: opacity .15s, visibility .15s;
  overflow-y: auto;
  color: var(--clr-white);

  &[aria-hidden='true'] {
    opacity: 0;
    visibility: hidden;
  }
`

export const Overlay = styled('div', forwardRef)`
  position: fixed;
  inset: 0;
  background: rgba(0 0 0 / .5);
`

export const Heading = styled('h2')`
  margin-bottom: 1em;
`

export const Content = styled('div', forwardRef)`
  margin: auto;
  z-index: 2;
  position: relative;
  background: var(--clr-background);
  border-radius: 1em;
  width: 400px;
  max-width: 100%;

  transform: translateY(0);
  transition: transform .15s;

  [aria-hidden='true'] & {
    transform: translateY(5px);
  }

  @media (max-width: ${mobileBP}) {
    border-radius: 0;
  }
`

export const InnerContent = styled('div')`
  padding: 1.2em 1em 1em;
`

export const Buttons = styled('div')`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1em;
  margin-top: 2em;
`

export const BannerImage = styled('div')`
  background: url(${p => p.src});
  background-size: cover;
  background-position: center;
  height: 12em;
  width: 100%;
`