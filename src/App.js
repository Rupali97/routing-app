import React, {useState, useEffect} from "react"

import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import Inbox from "./inbox";
import Calendar from "./calendar";
import Career from "./career";
import Report from "./report"
import Home from "./jobs"
import Navbar from './components/Navbar';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/jobs" render={() => <Navbar><Home /></Navbar>} />
        <Route exact path="/inbox" render={() => <Navbar><Inbox /></Navbar>}  />
        <Route exact path="/calendar" render={() => <Navbar><Calendar /></Navbar>} />
        <Route exact path="/career" render={() => <Navbar><Career /></Navbar>} />
        <Route exact path="/report" render={() => <Navbar><Report /></Navbar>} />
        <Redirect to="/jobs" />
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
