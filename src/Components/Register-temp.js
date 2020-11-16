import React from 'react';
import '../App.css';

function Register() {
  return (





            <div>
            <h1> Registera dig som användare</h1>
            <p> Registrera dig här för att ha tillgång till att skapa och ändra
            på redovisningstexter.</p>
            <p> Vi behöver bara några snabba uggifter från dig innan vi kan
            sätta igång och skriva </p>






                <form action="/login.js">
                  <label for="firstname">Namn:</label><br />
                  <input type="last" id="firstname" name="firstname" /><br />

                  <label for="email">Email:</label><br />
                  <input type="text" id="lastname" name="lastname" /><br />

                  <label for="password">Lösenord:</label><br />
                  <input type="text" id="password" name="password" /><br />

                   <input type="submit" value="Registrera" />
                </form>
            </div>

            <div>
            <h1> Registera dig som användare</h1>
            <p> Registrera dig här för att ha tillgång till att skapa och ändra
            på redovisningstexter.</p>
            <p> Vi behöver bara några snabba uggifter från dig innan vi kan
            sätta igång och skriva </p>






                <form action="/login.js">
                  <label for="firstname">Namn:</label><br />
                  <input type="last" id="firstname" name="firstname" /><br />

                  <label for="email">Email:</label><br />
                  <input type="text" id="lastname" name="lastname" /><br />

                  <label for="password">Lösenord:</label><br />
                  <input type="text" id="password" name="password" /><br />

                   <input type="submit" value="Registrera" />
                </form>
            </div>

      class NameForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {value: ''};

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
          this.setState({value: event.target.value});
        }

        handleSubmit(event) {
          alert('A name was submitted: ' + this.state.value);
          event.preventDefault();
        }

        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
        }
      }
      //
      // ReactDOM.render(
      //   <NameForm />,
      //   document.getElementById('App')
      // );











  );
}

export default Register;
