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
    //Bringing test data in to populate the tool.
    //Removal of test data will have no impact on functionality.

    componentDidMount() {
        this.setState({listOfTargets: Data.companies, selectedTarget: ''})
    }
    
    //Dashboard component holds the application's data in state, passing down necessary data via props
    //All create, update and delete functions are also held in this component and are passed down to the 
    //appropriate form components.

    //Selecting a target/company from the TargetList component will run this function and populate the 
    //CompanyCard component with the information of the selected target.
    onTargetSelect = (targetId) => {
        let allTargets = this.state.listOfTargets
        let selectedTarget = allTargets.filter((target) => {
            return target.id === targetId
        })
        const previousState = { ...this.state }
        previousState.selectedTarget = selectedTarget[0]
        this.setState(previousState)
    }

    //The submit button on the AddContact component adds a new target to the list of targets, a new target will have no contacts or financial data
    onAddTarget = (newTarget) => {
        let currentTarget = newTarget
        currentTarget.id = 'target' + this.state.listOfTargets.length.toString()
        const previousState = { ...this.state }
        previousState.listOfTargets.push(currentTarget)
        this.setState(previousState)
    }

    //Submit button in the EditContact component runs this function
    onSubmitEdit = (updatedInfo, targetId) => {
        const previousState = { ...this.state }
        let newIndex
        for (let i = 0; i < previousState.listOfTargets.length; i++) {
            if (previousState.listOfTargets[i].id === targetId) {
                newIndex = i
            }
        }
        previousState.listOfTargets[newIndex].name = updatedInfo.name
        previousState.listOfTargets[newIndex].info = updatedInfo.info
        previousState.listOfTargets[newIndex].status = updatedInfo.status
        this.setState(previousState)
    }

    //A delete button found in the TargetList component will remove the corresponding target
    onTargetDelete = (targetId) => {
        const previousState = { ...this.state }
        let newIndex
        for (let i = 0; i < previousState.listOfTargets.length; i++) {
            if (previousState.listOfTargets[i].id === targetId) {
                newIndex = i
            }
        }
        previousState.listOfTargets.splice(newIndex, 1)
        this.setState(previousState)
    }

    //Upon selecting a target, entering data and submitting it via the form in the AddFinancialPerformance component,
    //this function will run; also used to edit/change existing financial data.
    onAddFinancialData = (newData, targetId) => {
        const previousState = { ...this.state }
        let newIndex
        for (let i = 0; i < previousState.listOfTargets.length; i++) {
            if (previousState.listOfTargets[i].id === targetId) {
                newIndex = i
            }
        }
        previousState.listOfTargets[newIndex].performanceData = { ...newData }
        this.setState(previousState)
    }

    //The submit button found in the AddContact component runs this function
    onAddContact = (newContact, targetId) => {
        const previousState = { ...this.state }
        let newIndex
        for (let i = 0; i < previousState.listOfTargets.length; i++) {
            if (previousState.listOfTargets[i].id === targetId) {
                newIndex = i
            }
        }
        previousState.listOfTargets[newIndex].contacts.push({ ...newContact })
        this.setState(previousState)
    }

    //Submit on the EditContact form runs this function
    onEditContact = (updatedContacts, targetId) => {
        const previousState = { ...this.state }
        let targetIndex
        for (let i = 0; i < previousState.listOfTargets.length; i++) {
            if (previousState.listOfTargets[i].id === targetId) {
                targetIndex = i
            }
        }
        previousState.listOfTargets[targetIndex].contacts = updatedContacts
        this.setState(previousState)
    }

    //Pressing the delete button next to a contact in the ContactList component runs this function
    onDeleteContact = (targetId, contactId) => {
        const previousState = { ...this.state }
        let targetIndex
        for (let i = 0; i < previousState.listOfTargets.length; i++) {
            if (previousState.listOfTargets[i].id === targetId) {
                targetIndex = i
            }
        }
        let contactIndex
        let targetedContacts = previousState.listOfTargets[targetIndex].contacts
        for (let j = 0; j < targetedContacts.length; j++) {
            if (targetedContacts[j].id === contactId) {
                contactIndex = j
            }
        }
        previousState.listOfTargets[targetIndex].contacts.splice(contactIndex, 1)
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
                            targetSelect={this.onTargetSelect}
                            targetDelete={this.onTargetDelete}
                        />
                    }
                    {this.state.selectedTarget === '' ? null :
                        <CompanyCard 
                            targetInfo={this.state.selectedTarget} 
                            addFinData={this.onAddFinancialData}
                            addContact={this.onAddContact}
                            editContact={this.onEditContact}
                            deleteContact={this.onDeleteContact}
                            onSubmitEdit={this.onSubmitEdit}
                        />
                    }
                </div>
            </div>
        )
    }
}
