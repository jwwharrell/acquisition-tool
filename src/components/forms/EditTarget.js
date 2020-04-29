import React, { Component } from 'react'
import FadeIn from 'react-fade-in'


export default class EditTarget extends Component {
    state = {
        name: this.props.targetInfo.name,
        info: this.props.targetInfo.info,
        status: this.props.targetInfo.status
    }

    onNewTargetNameChange = (e) => {
        const name = e.target.value
        const previousState = { ...this.state }
        previousState.name = name
        this.setState(previousState)
    }

    onNewTargetInfoChange = (e) => {
        const info = e.target.value
        const previousState = { ...this.state }
        previousState.info = info
        this.setState(previousState)
    }

    onNewTargetStatusChange = (e) => {
        const status = e.target.value
        const previousState = { ...this.state }
        previousState.status = status
        this.setState(previousState)
    }

    editTarget = (e) => {
        e.preventDefault()
        const newTarget = {
            name: this.state.name,
            info: this.state.info,
            status: this.state.status
        }
        this.props.onSubmitEdit(newTarget, this.props.targetInfo.id)
    }

    render() {
        return (
            <FadeIn>
                <form
                    className='editForm'
                    onSubmit={this.editTarget}
                >
                    <input
                        type='text'
                        name="name"
                        required="required"
                        onChange={this.onNewTargetNameChange}
                        value={this.state.name}
                    />
                    <textarea
                        type='text'
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
            </FadeIn>
        )
    }
}
