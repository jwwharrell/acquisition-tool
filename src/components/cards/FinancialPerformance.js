import React, { Component } from 'react'
import AddFinancialPerformance from '../forms/AddFinancialPerformance.js'
import LineChart from '../tables/LineChart.js'


export default class FinancialPerformance extends Component {
    state = {
        buttonPressed: false,
    }

    onButtonPress = () => {
        const previousState = { ...this.state }
        previousState.buttonPressed = !this.state.buttonPressed
        this.setState(previousState)
    }

    

    render() {
        return (
            <div className='card'>
                <h2>Financial Performance</h2>
                {this.state.performanceData !== '' ? <LineChart perfData={this.props.targetInfo.performanceData} /> : null}
                <button onClick={this.onButtonPress}>{this.state.buttonPressed ? 'Hide Form' : 'Add Performance Data'}</button>
                {this.state.buttonPressed ? 
                    <AddFinancialPerformance 
                        addFinData={this.props.addFinData}
                        targetId={this.props.targetInfo.id} 
                    /> 
                : null}
            </div>
        )
    }
}
