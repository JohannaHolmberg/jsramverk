import React, { Component } from 'react'
import './App.css';

import Register from './Components/Register';
import Reports from './Components/Reports';
import Nav from './Components/Nav';
import Index from './Components/Index';
import Login from './Components/Login';

import Newkmom from './Components/Newkmom';
import Changekmom from './Components/Changekmom';

import Kmom01 from './Components/Week/kmom01';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       token: ''
    }
  }

  // app is parent, token is child
  parentFunction=(data_from_child)=>{
    this.setState({token: data_from_child});
  }
  render() {
    console.log(this.state.token);
  

    return (
      <div> 
        <Router>
          <div className="App">
              <Nav />
            <div className="body-content">
                <Switch>
                <Route path="/" exact component={Index}/>
                <Route path="/reports/week/:kmom" component={Kmom01}/>
          
                <Route path="/reports"
                  render={() => (
                    <Reports token = {this.state.token} />
                  )}/>
              
                <Route path="/register" component={Register}/>
                <Route path="/newkmom" component={Newkmom}/>
                <Route path="/changekmom" component={Changekmom}/>

                <Route path="/login"
                  render={() => (
                    <Login functionCallFromParent={this.parentFunction.bind(this)} />
                  )}/>
{/* <Token functionCalromParent={this.parentFunction.bind(this)}/> */}
                
                <Route path="/login" component={Login} />
                </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App