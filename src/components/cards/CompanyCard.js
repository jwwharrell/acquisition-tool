import React, { Component } from 'react'
import FinancialPerformance from './FinancialPerformance.js'
import ContactList from './ContactList.js'
import EditTarget from '../forms/EditTarget.js'

export default class CompanyCard extends Component {
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
            <div className='company'>
                <div className='company--header'>
                    <h2>{this.props.targetInfo.name}</h2>
                    <span className='statusMark'>{this.props.targetInfo.status}</span>
                    <p>{this.props.targetInfo.info}</p>
                    <span className='defaultBtn'
                        onClick={this.onButtonPress}
                    >
                        {this.state.buttonPressed ? 'Hide Form'
                        : 'Edit Basic Information'}
                    </span>
                    {this.state.buttonPressed ? 
                    <EditTarget 
                        targetInfo={this.props.targetInfo}
                        onSubmitEdit={this.props.onSubmitEdit} 
                    /> 
                : null}
                </div>
                <ContactList 
                    targetInfo={this.props.targetInfo}
                    addContact={this.props.addContact}
                    editContact={this.props.editContact}
                    deleteContact={this.props.deleteContact}
                />
                <FinancialPerformance 
                    targetInfo={this.props.targetInfo}
                    addFinData={this.props.addFinData}
                />
            </div>
        )
    }
}
