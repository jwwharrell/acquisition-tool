import React, { Component } from 'react'
import AddContact from '../forms/AddContact.js'
import EditContact from '../forms/EditContact.js'

export default class ContactList extends Component {
    state = {
        buttonPressed: false,
        editButtonPressed: false
    }

    componentDidMount() {
        this.setState({ buttonPressed: false, parentId: this.props.targetInfo.id })
    }

    onButtonPress = () => {
        const previousState = { ...this.state }
        previousState.buttonPressed = !this.state.buttonPressed
        this.setState(previousState)
    }

    onEditContact = (e) => {
        const updatedContract = 'something'
        const targetId = this.props.targetInfo.id
        const contactId = e.target.value
        this.props.editContact(updatedContract, targetId, contactId)
    }

    onEditContactPress = () => {
        const previousState = { ...this.state }
        previousState.editButtonPressed = !this.state.editButtonPressed
        this.setState(previousState)
    }

    onDeleteContact = (e) => {
        const targetId = this.props.targetInfo.id
        const contactId = e.target.value
        this.props.deleteContact(targetId, contactId)
    }


    render() {
        return (
            <div className='card'>
                <h2>Contacts</h2>
                <ul>
                    {this.props.targetInfo.contacts.map((contact, index) => {
                        return (
                            <li key={'contact' + index.toString()}>
                                {contact.contactName}: {contact.contactEmail}

                                <button
                                    onClick={this.onDeleteContact}
                                    value={contact.id}
                                >
                                    Delete
                                </button>

                            </li>
                        )
                    })}
                </ul>
                <button 
                    onClick={this.onEditContactPress}
                >{this.state.editButtonPressed ? 'Hide Form' : 'Edit Key Contacts'}</button>
                {this.state.editButtonPressed ?
                    <EditContact
                        editContact={this.props.editContact}
                        targetInfo={this.props.targetInfo}
                    /> : null}
                <button
                    onClick={this.onButtonPress}
                >{this.state.buttonPressed ? 'Hide Form' : 'Add Key Contacts'}</button>
                {this.state.buttonPressed ?
                    <AddContact
                        addContact={this.props.addContact}
                        targetInfo={this.props.targetInfo}
                    /> : null}
            </div>
        )
    }
}
