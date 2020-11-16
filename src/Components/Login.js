import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';


// import { Redirect } from "react-router-dom";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        password: '',
        email: '',
        passwordStatus: '',
        token: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  childFunction=(e)=>{
    e.preventDefault();
    this.props.functionCallFromParent(this.state.token);
  }

   handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    
  }

  handleSubmit(event) {
    // console.log('A email was submitted: ' + this.state.email);
    // console.log('A pass was submitted:  ' + this.state.password);
    event.preventDefault();
    

    fetch('http://localhost:1337/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password

        })
    })
        .then(res => res.json())
        .then(response => {
            if (response) { // if password is correct
                this.setState({token: response.accessToken});
                
                this.props.functionCallFromParent(this.state.token);              

                //console.log(this.state.token);
                alert("You are logged in!");
                this.props.history.push('/'); // redirecting to home page
            }
            else {
                // console.log("WRING PASSWORD");
                alert("Wrong password, try again!");
            }
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
  } // end handleSubmit

  render() {
    const {email, password} = this.state
    
    return (
      
      <React.Fragment>  
        {/*<button onClick={this.childFunction.bind(this)}>Click</button> */}
        {/*<button onClick={this.childFunction.bind(this)}>Click</button> */}

      <form onSubmit={this.handleSubmit}>
       <h1>Logga in</h1>


        <label> Email: </label> <br />
          <input
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange} /> <br />
        <br />

        <label> Lösenord: </label> <br />
          <input
          type="text"
          name="password"
          value={password}
          onChange={this.handleChange} /> <br />

        <input type="submit" value="Logga in" />
      </form>
      </React.Fragment>
    );
  }
}

  ReactDOM.render(
    <LogIn />,
    document.getElementById('root')
  );

export default LogIn
