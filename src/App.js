import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage/Homepage'
import Game from './components/Game/Game'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"
          component={Homepage}/>
          <Route path="/playing/:points"
          component={Game}/>
          <Route path="/simulation/:points"
          component={Game}/>
        </Switch>
      </Router>         
    </div>
  );
}

export default App;
