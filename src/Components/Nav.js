import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo192.png';

function Nav() {
  return (
      <div>
      <header className='App-header'>
      <img src={logo} className="App-logo" alt="logo"/>
        <h1>App-sida för kursen i jsramverk</h1>
      </header>





      <div class="navbar">


        <Link to='/'><li>Hem</li></Link>


        <div class="dropdown">
          <button class="dropbtn">Redovisa </button>


          <div class="dropdown-content">
            <Link to='/reports/week/1' className='report-link'><li>Kmom01</li></Link>
            <Link to='/reports/week/2' className='report-link'><li>Kmom02</li></Link>
          </div>
        </div>
      </div>

      </div>
  );
}

export default Nav;
