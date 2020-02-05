import React, { Component } from 'react'
import AddContact from '../forms/AddContact.js'

export default class ContactList extends Component {
    state = {
        contacts: [],
        currentContactName: '',
        currentContactEmail: '',
        buttonPressed: false
    }

    onButtonPress = () => {
        const previousState = { ...this.state }
        previousState.buttonPressed = !this.state.buttonPressed
        this.setState(previousState)
    }

    render() {
        return (
            <div className='card'>
                <h2>Contacts</h2>
                <button
                    onClick={this.onButtonPress}
                >Add Key Contacts</button>
                {this.state.buttonPressed ? <AddContact /> : null}
            </div>
        )
    }
}
