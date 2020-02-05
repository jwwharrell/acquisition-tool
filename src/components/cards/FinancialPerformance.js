import React, { Component } from 'react'
import AddFinancialPerformance from '../forms/AddFinancialPerformance.js'
import LineChart from '../tables/LineChart.js'


export default class FinancialPerformance extends Component {
    state = {
        performanceData: '',
        buttonPressed: false
    }

    onButtonPress = () => {
        const previousState = { ...this.state }
        previousState.buttonPressed = !this.state.buttonPressed
        this.setState(previousState)
    }

    onAddData = (newData) => {
        const previousState = { ...this.state }
        previousState.performanceData = {...newData}
        this.setState(previousState)
    }

    render() {
        return (
            <div className='card'>
                <h2>Financial Performance</h2>
                {this.state.performanceData !== '' ? <LineChart perfData={this.state.performanceData} /> : null}
                <button onClick={this.onButtonPress}>{this.state.buttonPressed ? 'Hide Form' : 'Add Performance Data'}</button>
                {this.state.buttonPressed ? <AddFinancialPerformance addData={this.onAddData} /> : null}
            </div>
        )
    }
}
