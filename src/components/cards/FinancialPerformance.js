import React, { Component } from 'react'

export default class FinancialPerformance extends Component {
    render() {
        return (
            <div className='card'>
                <h2>{this.props.selectedTarget.name} Financial Performance</h2>
            </div>
        )
    }
}
