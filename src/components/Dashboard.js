import React, { Component } from 'react'
import AddTarget from './cards/AddTarget.js'
import TargetList from './cards/TargetList.js'

export default class Dashboard extends Component {
    state = {
        listOfTargets: [],

    }

    onAddTarget = (newTarget) => {
        const previousState = { ...this.state }
        previousState.listOfTargets.push(newTarget)
        this.setState(previousState)
    }

    render() {
        return (
            <div className='dashboard'>
                <AddTarget
                    onSubmit={this.onAddTarget}
                />
                <TargetList
                    listOfTargets={this.state.listOfTargets}
                />
            </div>
        )
    }
}
