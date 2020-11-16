import React from 'react';
import '../../App.css';



class Kmom02 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            report: [],
            isLoaded: false
        };
    }

    // componentDidMount runs after the render method below, then updates the render method
    componentDidMount() {
        fetch('http://localhost:1337/reports/week/kmom02')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    report: json
                })
            });

    }

  render() {
    const { isLoaded, report } = this.state;

    if (!isLoaded) {
        return <div> Is loading... </div>;
    }
    else {
        return (
            <ul>
            {report.map(item => (


                <div key={item.id}>
                <h2>{item.report}</h2>
                Länk till
                <a href={item.link}>Github</a>

                </div>
            ))}
            </ul>

        );
    }
  }
}

export default Kmom02
