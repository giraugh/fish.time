import { render } from 'react-dom'
import { createElement } from 'react'
import { setup } from 'goober'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import * as Pages from './pages'
import { Navbar, Main, Waves, TimerDuration } from '/src/components'

// Set up goober to use React
setup(
  createElement,
  undefined, undefined,
  // Remove transient props from the DOM
  props => Object.keys(props).forEach(p => p[0] === '$' && delete props[p])
)

const App = () => <>
  <Navbar />
  <Main>
    <Routes>
      <Route path="/" element={<Pages.Timers />} />
      <Route path="/projects" element={<Pages.Projects />} />
      <Route path="*" element={<h1>404! Oh no!</h1>} />
    </Routes>
    <Waves />
    <TimerDuration />
  </Main>
</>

render(
  <BrowserRouter>
    <Routes>
      <Route path="/app/*" element={<App />} />
      <Route path="*" element={<Pages.Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('app')
)

