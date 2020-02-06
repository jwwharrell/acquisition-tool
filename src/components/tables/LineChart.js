import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


export default class LineChart extends Component {

    render() {
        return (
            <div>
                <Line data={{
                    labels: ['2018 Q1', '2018 Q2', '2018 Q3', '2018 Q4', '2019 Q1', '2019 Q2', '2019 Q3', '2019 Q4'],
                    datasets: [
                        {
                            label: 'Quaterly Net Profit (USD Million)',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: '#8D8D8D',
                            borderColor: '#E7C79A',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: '#8D8D8D',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: '#F9F9F9',
                            pointHoverBorderColor: '#333342',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [this.props.perfData.q1_2018, this.props.perfData.q2_2018, this.props.perfData.q3_2018, this.props.perfData.q4_2018, this.props.perfData.q1_2019, this.props.perfData.q2_2019, this.props.perfData.q3_2019, this.props.perfData.q4_2019]
                        }
                    ]
                }} />
            </div>
        )
    }
}
