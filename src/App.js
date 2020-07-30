import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home/Home'
import Webs from './components/pages/Webs/Webs'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/webs">
          <Webs />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
