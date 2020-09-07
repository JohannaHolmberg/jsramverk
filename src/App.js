import React from 'react';
import './App.css';
import Reports from './Components/Reports';
import Nav from './Components/Nav';
import Index from './Components/Index';


import Kmom01 from './Components/Week/kmom01';
import Kmom02 from './Components/Week/kmom02';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
            <div className="App">

             <Nav />

              <div className="body-content">
             <Route path="/" exact component={Index}/>
             <Route path="/reports" component={Reports}/>

            <Route path="/reports/week/1" component={Kmom01}/>
            <Route path="/reports/week/2" component={Kmom02}/>

            </div>

             </div>


        </Switch>
    </Router>


  );
}

export default App;
