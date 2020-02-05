import React, { Component } from 'react'

export default class AddContact extends Component {
    state = {
        contacts: {
            contactName: '',
            contactEmail: ''
        }
    }

    onNewTargetContactNameChange = (e) => {
        const contactName = e.target.value
        const previousState = { ...this.state }
        previousState.contacts.contactName = contactName
        this.setState(previousState)
    }

    onNewTargetContactEmailChange = (e) => {
        const contactEmail = e.target.value
        const previousState = { ...this.state }
        previousState.contacts.contactEmail = contactEmail
        this.setState(previousState)
    }

    render() {
        return (
            <div className='card--form--group'>
                <input
                    type='text'
                    placeholder='Key Contact Name'
                    name="contactName"
                    required="required"
                    onChange={this.onNewTargetContactNameChange}
                    value={this.state.contacts.contactName}
                />
                <input
                    type='email'
                    placeholder='Key Contact Email'
                    name="contactEmail"
                    required="required"
                    onChange={this.onNewTargetContactEmailChange}
                    value={this.state.contacts.contactEmail}
                />
            </div>
        )
    }
}
