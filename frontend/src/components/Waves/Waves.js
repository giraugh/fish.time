import { useRef, useCallback, useEffect, useState } from 'react'

import { useTimerStore } from '/src/stores'
import { Svg, WavesContainer } from './wavesStyle'

const WAVE_HEIGHT = 100
const SHOW_DEBUG = false
const WAVE_COUNT = 4

const Waves = ({ active = false }) => {
  const svgRef = useRef()
  const [pageWidth, setPageWidth] = useState(0)
  const timerActive = useTimerStore(s => s.timerActive)

  const handleWindowResize = useCallback(() => {
    if (svgRef.current) {
      setPageWidth(svgRef.current.getBoundingClientRect().width * 2)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])
  
  // We find points along the width of the page
  // and then alternate whether they are up or down
  const wavePoints = Array.from({ length: WAVE_COUNT + 1 })
    .map((_, i) => ({ x: (pageWidth / WAVE_COUNT) * i, y: WAVE_HEIGHT / 2 }))

  // Calculate path of the wave
  let path = `M${wavePoints[0].x} ${wavePoints[0].y}` +
             `Q${wavePoints[0].x + wavePoints[1].x / 2} ${0} ${wavePoints[1].x} ${wavePoints[1].y}` +
             wavePoints.slice(2).map(p => `T${p.x} ${p.y}`).join(' ') +
             `L${pageWidth} ${WAVE_HEIGHT * 2}` +
             `L${0} ${WAVE_HEIGHT * 2}`

  return <Svg width={pageWidth} height={3 * WAVE_HEIGHT} ref={svgRef} $active={timerActive}>
    <defs>
      <linearGradient id="wave-gradient" gradientTransform="rotate(90)">
        <stop offset="5%" stopColor="var(--clr-waves-bright)" />
        <stop offset="80%" stopColor="var(--clr-background)" />
      </linearGradient>
    </defs>
    <WavesContainer $active={timerActive || active}>
      <path d={path} fill="url(#wave-gradient)" />
      {SHOW_DEBUG && wavePoints.map((p,i) => <circle cx={p.x} cy={p.y} r={3} fill="yellow" key={i} />)}
    </WavesContainer>
  </Svg>
}

export default Waves
