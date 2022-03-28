import { forwardRef } from 'react'
import { styled } from 'goober'

export const Svg = styled('svg', forwardRef)`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: min-content;
  
  @media (max-width: 650px) {
    bottom: -30px;
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
