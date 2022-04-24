import { forwardRef } from 'react'
import { styled } from 'goober'
import { mobileBP } from '/src/styles/breakpoints'

export const Svg = styled('svg', forwardRef)`
  left: 0;
  width: 100%;
  height: min-content;
  bottom: -80px;
  filter: drop-shadow(0px -8px 0px var(--clr-background));
  opacity: 0;

  transition: bottom .5s, opacity .5s;

  ${p => p.$sticky && `
    position: fixed;
  `}

  ${p => p.$active && `
    bottom: -20px; 
    opacity: 1;
  `}
  
  @media (max-width: ${mobileBP}) {
    bottom: -50px;

    ${p => p.$active && `
      bottom: -20px; 
    `}
  }

`

export const WavesContainer = styled('g')`
  animation: slide 10s linear infinite;

  animation-play-state: ${p => p.$active ? 'running' : 'paused'};

  @keyframes slide {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100%);
    }
  }
`
