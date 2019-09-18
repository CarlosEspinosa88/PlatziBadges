import React from 'react';
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import HomePage from "../pages/HomePage"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/badges' component={Badges} />
          <Route exact path='/badges/new' component={BadgeNew} />
          <Route exact path='/' component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App