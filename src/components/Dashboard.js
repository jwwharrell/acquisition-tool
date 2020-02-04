import React, { Component } from 'react'
import AddTarget from './cards/AddTarget.js'
import AllTargets from './cards/AllTargets.js'

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
            <div>
                <AddTarget
                    onSubmit={this.onAddTarget}
                />
                {this.state.listOfTargets.map((target) => {
                    return (
                        <AllTargets
                            name={target.name}
                        />
                    )
                })}
            </div>
        )
    }
}
