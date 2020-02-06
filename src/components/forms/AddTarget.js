import React, { Component } from 'react'

export default class AddTarget extends Component {
    state = {

        name: '',
        info: '',
        status: '',
        buttonPressed: false
    }

    createNewTarget = (e) => {
        e.preventDefault()
        const newTarget = {
            name: this.state.name,
            info: this.state.info,
            status: this.state.status,
            contacts: [],
            performanceData: ''
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

    onButtonPress = () => {
        const previousState = { ...this.state }
        previousState.buttonPressed = !this.state.buttonPressed
        this.setState(previousState)
    }


    render() {
        return (
            <div className='card'>
                <button onClick={this.onButtonPress}>
                    {this.state.buttonPressed ? 'Hide Form' : 'Add Target'}
                </button>
                {this.state.buttonPressed ?
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
                        <textarea
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
                            <option value='Researching'>Researching</option>
                            <option value='Pending Approval'>Pending Approval</option>
                            <option value='Approved'>Approved</option>
                            <option value='Declined'>Declined</option>
                        </select>
                        <input
                            type='submit'
                        />
                    </form>
                    : null
                }
            </div>
        )
    }
}
