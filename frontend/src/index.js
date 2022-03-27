import { render } from 'react-dom'
import { createElement } from 'react'
import { setup } from 'goober'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import * as Pages from './pages'
import { Navbar } from '/src/components'

// Set up goober to use React
setup(
  createElement,
  undefined, undefined,
  // Remove transient props from the DOM
  props => Object.keys(props).forEach(p => p[0] === '$' && delete props[p])
)

render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Pages.Timers />} />
      <Route path="*" element={<h1>404! Oh no!</h1>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('app')
)

