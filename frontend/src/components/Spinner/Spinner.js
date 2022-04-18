import { styled } from 'goober'

import clockSVG from '/public/clock.svg'

const Spinner = () =>
  <SpinningImage aria-hidden src={clockSVG} />

const SpinningImage = styled('img')`
  width: 8em;
  height: 8em;
  margin: auto;
  animation: spin 1s linear infinite,
             fade-in .4s forwards;
  opacity: 0;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(365deg); }
  }

  @keyframes fade-in {
   0% { opacity: 0; }
   100% { opacity: 1; }
  }
`

export default Spinner
