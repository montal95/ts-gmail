import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header, Sidebar, Mail, EmailList } from './components'

const App: React.FC = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <EmailList />
          </Route>
          <Route path="/mail">
            <Mail />
          </Route>
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default App
