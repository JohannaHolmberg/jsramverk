import React, { Component } from 'react';
// import { Route } from "react-router-dom";
import '../../App.css';

class Report extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kmom: this.props.match.params.kmom,
            report: ''
        };
    }

    componentDidMount () {
      // console.log(this.state.kmom);

      fetch(`http://localhost:1337/reports/week/${this.state.kmom}`)
      .then(res => res.json())
      .then(result => {
            // console.log(this.state.kmom);
            // console.log(result[0].report);
            this.setState({
                report: result[0].report
            })

      });
    }

  render() {
      // console.log(this.props.match.params.kmom); // shows correct kmom
    return (
        <div>
            <h2>{this.props.match.params.kmom}</h2>
            <p>{this.state.report}</p>
        </div>
    );
  }
}

export default Report;












// import React from 'react';
// import '../../App.css';
// // import ReactDOM from 'react-dom';
//
// class Kmom01 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             report: [],
//             isLoaded: false
//         };
//     }
//
//
//
//
//     // componentDidMount runs after the render method below, then updates the render method
//     componentDidMount() {
//         fetch('http://localhost:1337/reports/week/kmom01')
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     report: json
//                 })
//             });
//
//     }
//
//   render() {
//     const { isLoaded, report, kmom } = this.state;
//
//     if (!isLoaded) {
//         return <div> Is loading... </div>;
//     }
//     else {
//         return (
//             <ul>
//             {report.map(item => (
//
//
//                 <div key={item.id}>
//                 <h2>{item.report}</h2>
//                 Länk till
//                 <a href={item.link}>Github</a>
//
//
//                 </div>
//             ))}
//             </ul>
//
//         );
//     }
//   }
// }
//
// export default Kmom01
