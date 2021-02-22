import React, {useState, useEffect} from "react"

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Inbox from "./inbox";
import Calendar from "./calendar";
import Career from "./career";
import Report from "./report"
import Home from "./jobs"
import Navbar from './components/Navbar';
import { Typography } from '@material-ui/core';

function App() {
  const [activeTab, setActiveTab] = useState("jobs");

  const returnChild = () => {
    if(activeTab.toLowerCase() === "jobs"){
      return <Home />
    } else if(activeTab.toLowerCase() === "inbox"){
      return <Inbox />
    }else if(activeTab.toLowerCase() === "calendar"){
      return <Calendar />
    }else if(activeTab.toLowerCase() === "career"){
      return <Career />
    }else{
      return <Report />
    }
  }

  const routeToPath = () => {
    <Switch>
      <Route exact path="/jobs" component={Home} />
      <Route exact path="/inbox" component={Inbox} />
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/career" component={Career} />
      <Route exact path="/report" component={Report} />
    </Switch> 
  }

  return (
     <div>
      <BrowserRouter>
        <Navbar change={(tab) => setActiveTab(tab)}>
          {returnChild()}
        </Navbar>
        {/* <Switch>
          <Route exact path="/" component={() => (
            <Typography variant="h1" style={{textAlign: 'center', marginTop: 300, fontWeight: 'bold'}}>Welcome</Typography>
          )} />
          <Route exact path="/jobs" component={Home} />
          <Route exact path="/inbox" component={Inbox} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/report" component={Report} />
        </Switch> */}
      </BrowserRouter>
     </div>
  );
}



export default App;
