import { forwardRef } from 'react'
import { styled } from 'goober'

export const Svg = styled('svg', forwardRef)`
  position: fixed;
  left: 0;
  width: 100%;
  height: min-content;
  bottom: -40px;
  transition: bottom .5s;
  filter: drop-shadow(0px -8px 0px var(--clr-background));

  ${p => p.$active && `
    bottom: -20px; 
  `}
  
  @media (max-width: 650px) {
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
