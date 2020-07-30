import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home/Home'
import Webs from './components/pages/Webs/Webs'
import UX from './components/pages/UX/UX'
import UI from './components/pages/UI/UI'
import CV from './components/pages/CV/CV'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/webs">
          <Webs />
        </Route>
        <Route path="/ux">
          <UX />
        </Route>
        <Route path="/ui">
          <UI />
        </Route>
        <Route path="/cv">
          <UI />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
