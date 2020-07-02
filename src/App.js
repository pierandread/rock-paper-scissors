import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage/Homepage'
import Game from './components/Game/Game'


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/"
        component={Homepage}/>
          <Route path="/playing"
          component={Game}/>
      </Router>         
    </div>
  );
}

export default App;
