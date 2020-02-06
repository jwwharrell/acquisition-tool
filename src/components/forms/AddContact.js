import React, { Component } from 'react'

export default class AddContact extends Component {
    state = {
        contact: {
            contactName: '',
            contactEmail: ''
        }
    }

    onNewTargetContactNameChange = (e) => {
        const contactName = e.target.value
        const previousState = { ...this.state }
        previousState.contact.contactName = contactName
        this.setState(previousState)
    }

    onNewTargetContactEmailChange = (e) => {
        const contactEmail = e.target.value
        const previousState = { ...this.state }
        previousState.contact.contactEmail = contactEmail
        this.setState(previousState)
    }

    createNewContact = (e) => {
        e.preventDefault()
        const id = this.props.targetId
        const newContact = this.state.contact
        this.props.addContact(newContact, id)
    }

    render() {
        return (
            <form 
                onSubmit={this.createNewContact}
                className='card--form'>
                <input
                    type='text'
                    placeholder='Key Contact Name'
                    name="contactName"
                    required="required"
                    onChange={this.onNewTargetContactNameChange}
                    value={this.state.contact.contactName}
                />
                <input
                    type='email'
                    placeholder='Key Contact Email'
                    name="contactEmail"
                    required="required"
                    onChange={this.onNewTargetContactEmailChange}
                    value={this.state.contact.contactEmail}
                />
                <input
                        type='submit'
                    />
            </form>
        )
    }
}
