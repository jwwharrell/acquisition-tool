import React, { Component } from 'react'
import AddContact from '../forms/AddContact.js'

export default class ContactList extends Component {
    state = {
        buttonPressed: false,
        parentId: ''
    }

    componentDidMount() {
        this.setState({buttonPressed: false, parentId: this.props.targetInfo.id})
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
                <ul>
                    {this.props.targetInfo.contacts.map((contact, index) => {
                        return (
                            <li key={'contact' + index.toString()}>{contact.contactName}: {contact.contactEmail}</li>
                        )
                    })}
                </ul>
                <button
                    onClick={this.onButtonPress}
                >{this.state.buttonPressed ? 'Hide Form' : 'Add Key Contacts'}</button>
                {this.state.buttonPressed ? 
                    <AddContact 
                        addContact={this.props.addContact} 
                        targetId={this.props.targetInfo.id}
                /> : null}
            </div>
        )
    }
}
