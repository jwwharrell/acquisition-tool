import React, { Component }  from 'react';
import { Line } from 'react-chartjs-2';


export default class LineChart extends Component {
    state = {
        data: {
            labels: ['2018 Q1', '2018 Q2', '2018 Q3', '2018 Q4', '2019 Q1', '2019 Q2', '2019 Q3', '2019 Q4'],
            datasets: [
                {
                    label: 'Net Profits Over 2 Years',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [this.props.perfData.q1_2018, this.props.perfData.q2_2018, this.props.perfData.q3_2018, this.props.perfData.q4_2018, this.props.perfData.q1_2019, this.props.perfData.q2_2019, this.props.perfData.q3_2019, this.props.perfData.q4_2019]
                }
            ]
        }
    }



    render() {
        return (
            <div>
                <h2>Line Example</h2>
                <Line data={this.state.data} />
            </div>
        )
    }
}
