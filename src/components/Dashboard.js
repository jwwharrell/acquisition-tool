import React, { Component } from 'react'
import AddTarget from './forms/AddTarget.js'
import TargetList from './cards/TargetList.js'
import Data from '../mock_data.js'

import CompanyCard from './cards/CompanyCard.js'

export default class Dashboard extends Component {
    state = {
        listOfTargets: [],
        selectedTarget: ''

    }

    componentDidMount() {
        this.setState({listOfTargets: Data.companies, selectedTarget: ''})
    }

    onAddTarget = (newTarget) => {
        let currentTarget = newTarget
        currentTarget.id = 'target' + this.state.listOfTargets.length.toString()
        const previousState = { ...this.state }
        previousState.listOfTargets.push(currentTarget)
        this.setState(previousState)
    }

    onAddFinancialData = (newData, targetId) => {
        const previousState = { ...this.state }
        const indexOfTarget = previousState.listOfTargets.map((target, index) => {
            if (target.id === targetId) {
                return index
            } else {
                return 'Unique Value'
            }
        })
        const oneArray = indexOfTarget.filter((index) => {
            if (index !== 'Unique Value') {
                return index
            }
        })
        let newIndex = oneArray[0]
        if (newIndex === undefined) {
            newIndex = 0
        }
        previousState.listOfTargets[newIndex].performanceData = {...newData}
        this.setState(previousState)
    }

    onAddContact = (newContact, targetId) => {
        const previousState = { ...this.state }
        const indexOfTarget = previousState.listOfTargets.map((target, index) => {
            if (target.id === targetId) {
                return index
            } else {
                return 'Unique Value'
            }
        })
        const oneArray = indexOfTarget.filter((index) => {
            if (index !== 'Unique Value') {
                return index
            }
        })
        let newIndex = oneArray[0]
        if (newIndex === undefined) {
            newIndex = 0
        }
        previousState.listOfTargets[newIndex].contacts.push({...newContact})
        this.setState(previousState)
    }

    onTargetSelect = (targetId) => {
        let allTargets = this.state.listOfTargets
        let selectedTarget = allTargets.filter((target) => {
            return target.id === targetId
        })
        const previousState = { ...this.state }
        previousState.selectedTarget = selectedTarget[0]
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
                    {this.state.listOfTargets.length === 0 ? null :
                        <TargetList
                            listOfTargets={this.state.listOfTargets}
                            selectTarget={this.onTargetSelect}
                        />
                    }
                    {this.state.selectedTarget === '' ? null :
                        <CompanyCard 
                            targetInfo={this.state.selectedTarget} 
                            addFinData={this.onAddFinancialData}
                            addContact={this.onAddContact}
                            />
                    }
                </div>
            </div>
        )
    }
}
