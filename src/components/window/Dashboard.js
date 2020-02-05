import React, { Component } from 'react'
import AddTarget from '../forms/AddTarget.js'
import TargetList from '../cards/TargetList.js'
import FinancialPerformance from '../cards/FinancialPerformance.js'

export default class Dashboard extends Component {
    state = {
        listOfTargets: [],
        selectedTarget: ''

    }


    onAddTarget = (newTarget) => {
        let currentTarget = newTarget
        currentTarget.id = 'target' + this.state.listOfTargets.length.toString()
        const previousState = { ...this.state }
        previousState.listOfTargets.push(currentTarget)
        this.setState(previousState)
    }

    onTargetSelect = (targetId) => {
        let allTargets = this.state.listOfTargets
        let selectedTarget = allTargets.filter((target) => {
            return target.id === targetId
        })
        const previousState = { ...this.state }
        previousState.selectedTarget = selectedTarget
        this.setState(previousState)
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <div className='dashboard'>
                    <AddTarget
                        onSubmit={this.onAddTarget}
                    />
                    <TargetList
                        listOfTargets={this.state.listOfTargets}
                        selectTarget={this.onTargetSelect}
                    />
                    <FinancialPerformance />
                </div>
            </div>
        )
    }
}
