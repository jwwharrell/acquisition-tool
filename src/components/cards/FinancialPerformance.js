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
        let addOrUpdate
        if (this.props.targetInfo.performanceData === '') {
            addOrUpdate = 'Add Performance Data'
        } else {
            addOrUpdate = 'Edit Performance Data'
        }
        return (
            <div className='card'>
                <h2>Financial Performance</h2>
                {this.state.performanceData !== '' ? <LineChart perfData={this.props.targetInfo.performanceData} /> : null}
                <span className='defaultBtn' onClick={this.onButtonPress}>{this.state.buttonPressed ? 'Hide Form' : addOrUpdate}</span>
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
