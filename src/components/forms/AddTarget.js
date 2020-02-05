import React, { Component } from 'react'

export default class AddTarget extends Component {
    state = {

        name: '',
        info: '',
        status: '',
    }

    createNewTarget = (e) => {
        e.preventDefault()
        const newTarget = {
            name: this.state.name,
            info: this.state.info,
            status: this.state.status,
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
                        type='submit'
                    />
                </form>
            </div>
        )
    }
}
