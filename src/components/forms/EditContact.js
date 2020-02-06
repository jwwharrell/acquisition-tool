import React, { Component } from 'react'

export default class EditContact extends Component {
    state = {
        contacts: this.props.targetInfo.contacts
    }

    onNewTargetContactNameChange = (e) => {
        const contactName = e.target.value
        const contactIndex = e.target.id
        const previousState = { ...this.state }
        previousState.contacts[contactIndex].contactName = contactName
        this.setState(previousState)    
    }

    onNewTargetContactEmailChange = (e) => {
        const contactEmail = e.target.value
        const contactIndex = e.target.id - 10000
        const previousState = { ...this.state }
        previousState.contacts[contactIndex].contactEmail = contactEmail
        this.setState(previousState)  
    }

    editContact = (e) => {
        e.preventDefault()
        const contacts = this.state.contacts
        const targetId = this.props.targetInfo.id
        this.props.editContact(contacts, targetId)
    }

    render() {
        return (
            <form onSubmit={this.editContact}>
                {this.state.contacts.map((contact, index) => {
                    return (
                        <div key={'editContact' + index}>
                            <input
                                type='text'
                                placeholder='Key Contact Name'
                                name="contactName"
                                required="required"
                                onChange={this.onNewTargetContactNameChange}
                                value={contact.contactName}
                                id={index}
                            />
                            <input
                                type='email'
                                placeholder='Key Contact Email'
                                name="contactEmail"
                                required="required"
                                onChange={this.onNewTargetContactEmailChange}
                                value={contact.contactEmail}
                                id={index+10000}
                            />
                        </div>
                    )
                })}
                <input
                    type='submit'
                />
            </form>
        )
    }
}
