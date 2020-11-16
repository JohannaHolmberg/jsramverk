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





      <div className="navbar">


        <Link to='/'><li>Hem</li></Link>


        <div className="dropdown">
          <button className="dropbtn">Redovisa </button>


          <div className="dropdown-content">
            <Link to='/reports' className='report-link'><li>Skriv veckorapport</li></Link>
            <Link to='/reports/week/kmom01' className='report-link'><li>Kmom01</li></Link>
            <Link to='/reports/week/kmom02' className='report-link'><li>Kmom02</li></Link>
          </div>
        </div>

            <Link to='/register'><li>Registrera</li></Link>
            <Link to='/login'><li>Logga in</li></Link>
      </div>

      </div>
  );
}

export default Nav;
