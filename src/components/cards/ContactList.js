import React, { Component } from 'react'
import AddContact from '../forms/AddContact.js'

export default class ContactList extends Component {
    state = {
        allContacts: [],
        buttonPressed: false
    }

    onButtonPress = () => {
        const previousState = { ...this.state }
        previousState.buttonPressed = !this.state.buttonPressed
        this.setState(previousState)
    }

    onAddContact = (newContact) => {
        console.log(this.state.allContacts)
        const previousState = { ...this.state }
        console.log(newContact)
        previousState.allContacts.push({...newContact})
        this.setState(previousState)
    }

    render() {
        return (
            <div className='card'>
                <h2>Contacts</h2>
                <ul>
                    {this.state.allContacts.map((contact, index) => {
                        return (
                            <li key={'contact' + index.toString()}>{contact.contactName}: {contact.contactEmail}</li>
                        )
                    })}
                </ul>
                <button
                    onClick={this.onButtonPress}
                >Add Key Contacts</button>
                {this.state.buttonPressed ? <AddContact addContact={this.onAddContact} /> : null}
            </div>
        )
    }
}
