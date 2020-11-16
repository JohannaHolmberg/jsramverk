import React from 'react';
import '../App.css';

class Newkmom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        kmom: '',
        text: '',
        isLoggedIn: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  handleSubmit(event) {
    console.log('A title was submitted: ' + this.state.kmom);
    console.log('A text was submitted:  ' + this.state.text);
    event.preventDefault();
    console.log(this.state);


    fetch('http://localhost:1337/newkmom', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            kmom: this.state.kmom,
            text: this.state.text

        })
    })
        .then(res => res.json())
        .then(response => {
            console.log(response);

            if (response) {
                console.log("The post request worked, get the data in backend and save somehow");
            }
            else {
                console.log("POST did not go well");
            }
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
  }




  render() {
      var header = <h1>Nytt kmom redovisningstext</h1>

        const {kmom, text} = this.state
        return (
          <form onSubmit={this.handleSubmit}>

           {header}
            <label> Kmom: (ex kmom01) </label> <br />
              <input
              type="text"
              name="kmom"
              value={kmom}
              onChange={this.handleChange} /> <br />
            <br />

            <label> Redovisningstext: </label> <br />
            <textarea name="text" value={text} cols="40" rows="5" onChange={this.handleChange} ></textarea>
            <br />


            <input type="submit" value="Skicka in kmom" />
          </form>

    );
  }
}




export default Newkmom
