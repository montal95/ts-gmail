import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Header, Sidebar } from './components'

const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Sidebar />
    </div>
  </BrowserRouter>
)

export default App
