import { render } from 'react-dom'
import { createElement } from 'react'
import { setup } from 'goober'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Provider } from 'urql'

import * as Pages from './pages'
import { Navbar, Main, Waves, TimerDuration } from '/src/components'
import client from '/src/graphql/client'
import { Auth, NoAuth } from '/src/utils/pageWrappers'

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
      <Route path="/timers" element={<Pages.Timers />} />
      <Route path="/resources" element={<Pages.TimerResources />} />
      <Route path="/projects" element={<Pages.Projects />} />
      <Route path="/clients" element={<Pages.Clients />} />
      <Route path="/logout" element={<Pages.Logout />} />
      <Route path="*" element={<Navigate to='/app/timers' />} />
    </Routes>
    <Waves />
    <TimerDuration />
  </Main>
</>

render(
  <Provider value={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/app/*" element={<Auth element={<App />} />} />
        <Route path="/login" element={<NoAuth element={<Pages.Login />} />} />
        <Route path="/signup" element={<NoAuth element={<Pages.Signup />} />} />
        <Route path="*" element={<Pages.Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)

