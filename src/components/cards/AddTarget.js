import React, { Component } from 'react'

export default class AddTarget extends Component {
    state = {

        name: '',
        info: '',
        status: '',
        contacts: '',
        performance: ''

    }

    createNewTarget = (e) => {
        e.preventDefault()
        const newTarget = {
            name: this.state.name,
            info: this.state.info,
            status: this.state.status,
            contacts: this.state.contacts,
            performance: this.state.performance
        }
        this.props.onSubmit(newTarget)
    }

    onNewTargetNameChange = (e) => {
        const name = e.target.value;
        this.setState({ name })
    }

    onNewTargetInfoChange = (e) => {
        const info = e.target.value;
        this.setState({ info })
    }

    onNewTargetStatusChange = (e) => {
        const status = e.target.value;
        this.setState({ status })
    }

    onNewTargetContactsChange = (e) => {
        const contacts = e.target.value;
        this.setState({ contacts })
    }

    onNewTargetPerformanceChange = (e) => {
        const performance = e.target.value;
        this.setState({ performance })
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
                    <input
                        type='text'
                        placeholder='Key Contacts'
                        name="contacts"
                        required="required"
                        onChange={this.onNewTargetContactsChange}
                        value={this.state.contacts}
                    />
                    <input
                        type='text'
                        placeholder='Financial Performance'
                        name="performance"
                        required="required"
                        onChange={this.onNewTargetPerformanceChange}
                        value={this.state.performance}
                    />
                    <input
                        type='submit'
                    />
                </form>
            </div>
        )
    }
}
