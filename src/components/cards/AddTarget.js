import React, { Component } from 'react'

export default class AddTarget extends Component {
    state = {

        name: '',
        info: '',
        status: '',
        contacts: {
            contactName: '',
            contactEmail: ''
        }
    }

    createNewTarget = (e) => {
        e.preventDefault()
        const newTarget = {
            name: this.state.name,
            info: this.state.info,
            status: this.state.status,
            contacts: this.state.contacts,
        }
        this.props.onSubmit(newTarget)
    }

    onNewTargetNameChange = (e) => {
        const name = e.target.value
        this.setState({ name })
    }

    onNewTargetInfoChange = (e) => {
        const info = e.target.value
        this.setState({ info })
    }

    onNewTargetStatusChange = (e) => {
        const status = e.target.value
        this.setState({ status })
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
            <div className='card'>
                <form
                    className='card--form'
                    onSubmit={this.createNewTarget}
                >
                    <input
                        type='text'
                        placeholder='Company Name'
                        name="name"
                        required="required"
                        onChange={this.onNewTargetNameChange}
                        value={this.state.name}
                    />
                    <input
                        type='text'
                        placeholder='Company Info'
                        name="info"
                        required="required"
                        onChange={this.onNewTargetInfoChange}
                        value={this.state.info}
                    />
                    <select
                        name='status'
                        onChange={this.onNewTargetStatusChange}
                        value={this.state.status}
                    >
                        <option value={null}> -- Select Status -- </option>
                        <option value='researching'>Researching</option>
                        <option value='pendingApproval'>Pending Approval</option>
                        <option value='approved'>Approved</option>
                        <option value='declined'>Declined</option>
                    </select>
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
                    <input
                        type='submit'
                    />
                </form>
            </div>
        )
    }
}
