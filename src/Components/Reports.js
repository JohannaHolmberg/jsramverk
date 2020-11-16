import React from 'react';
import '../App.css';

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        kmom: '',
        text: '',
        isLoggedIn: false,
        token: this.props.token
    };
  }

  // a function that will run on load here to check token status
  componentDidMount() {
    if (this.state.token) {
      this.setState({isLoggedIn: true});
    }
  }


  render() {
 
      console.log(this.state.token);
      var header = <h1>Rapport</h1>

      var changeKmomButton = this.state.isLoggedIn && <button className="reports-kmom-button red" onClick={changeKmombuttonClick}>Ändra kmom</button>
      var newKmomButton = this.state.isLoggedIn && <button className="reports-kmom-button green"  onClick={newKmombuttonClick}>Nytt kmom</button>

    return (
        <div>
            {header}
            <Greeting isLoggedIn={this.state.isLoggedIn} />
            {changeKmomButton} {newKmomButton}          
        </div>
    );
  }
}

function changeKmombuttonClick() {
    window.location.href="/changekmom";
}

function newKmombuttonClick() {
    window.location.href="/newkmom";
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function GuestGreeting(props) {
  return  <h3>Du är inte inloggad, var välnlig klicka på Logga in i menyn ovan och kom tillbaka efter att du har loggay in!</h3>;
}

function UserGreeting(props) {
  return (
        <h4>Du är inloggad och kan ändra och skapa nya redovisningstext till dina kursmoment</h4>
  )
}


export default Reports