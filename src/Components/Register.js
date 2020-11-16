import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        password: '',
        email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    console.log('A password was submitted: ' + this.state.password);
    console.log('A email was submitted: ' + this.state.email);
    console.log(this.state);
    event.preventDefault();

    fetch('http://localhost:1337/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            // if (response.data) {
            //     console.log(response.data);
            //     // this.props.history.push('login');
            // } else {
            //     this.setState({
            //         status: 'Not working.'
            //     })
            // }
        })
        .catch((error) => {
            console.error('Error: ', error);
        });

} // end handleSubmit

  render() {
    const {email, password} = this.state
    return (

      <form onSubmit={this.handleSubmit}>
       <h1>Registera dig som användare</h1>

       <label> Email: </label> <br />
         <input
         type="text"
         name="email"
         value={email}
         onChange={this.handleChange} /><br />

        <label> Lösenord: </label><br />
          <input
          type="text"
          name="password"
          value={password}
          onChange={this.handleChange} /><br />



        <input type="submit" value="Registrera" />
      </form>
    );
  }
};










  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );

export default NameForm
