import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header, Sidebar, Mail, EmailList } from './components'
import { AppBody } from './components/elements'

const App: React.FC = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <AppBody>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <EmailList />
          </Route>
          <Route path="/mail">
            <Mail />
          </Route>
        </Switch>
      </AppBody>
    </div>
  </BrowserRouter>
)

export default App
