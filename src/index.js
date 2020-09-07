import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import About from './Components/About';
// import Reports from './Components/Reports';
// import Nav from './Components/Nav';
import * as serviceWorker from './serviceWorker';


// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//     firstName: 'Johanna',
//     lastName: 'Attefalk'
//     }


ReactDOM.render(
  // element,
  <React.StrictMode>
    <App />

  </React.StrictMode>,

  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
