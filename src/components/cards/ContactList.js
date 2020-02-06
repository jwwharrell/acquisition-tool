import React, { Component } from 'react'
import AddContact from '../forms/AddContact.js'

export default class ContactList extends Component {
    state = {
        allContacts: [],
        buttonPressed: false,
        parentId: ''
    }

    componentDidMount() {
        this.setState({allContacts: this.props.targetInfo.contacts , buttonPressed: false, parentId: this.props.targetInfo.id})
    }

    onButtonPress = () => {
        const previousState = { ...this.state }
        previousState.buttonPressed = !this.state.buttonPressed
        this.setState(previousState)
    }

    onAddContact = (newContact) => {
        const previousState = { ...this.state }
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
                >{this.state.buttonPressed ? 'Hide Form' : 'Add Key Contacts'}</button>
                {this.state.buttonPressed ? <AddContact addContact={this.onAddContact} /> : null}
            </div>
        )
    }
}
