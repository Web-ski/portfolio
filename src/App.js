import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Home from './components/Home/Home'
import Webs from './components/Webs/Webs'
import UX from './components/UX/UX'
import UI from './components/UI/UI'
import CV from './components/CV/CV'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/front">
          <Webs />
        </Route>
        <Route path="/ux">
          <UX />
        </Route>
        <Route path="/ui">
          <UI />
        </Route>
        <Route path="/cv">
          <CV />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
