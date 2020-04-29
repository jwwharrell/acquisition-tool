import React, { Component } from 'react'
import FadeIn from 'react-fade-in'


export default class AddFinancialPerformance extends Component {
    state = {
        performance: {
            q1_2018: '',
            q2_2018: '',
            q3_2018: '',
            q4_2018: '',
            q1_2019: '',
            q2_2019: '',
            q3_2019: '',
            q4_2019: ''
        },
    }

    onNewPerfQ118Change = (e) => {
        const amount = e.target.value
        const previousState = { ...this.state }
        previousState.performance.q1_2018 = amount
        this.setState(previousState)
    }

    onNewPerfQ218Change = (e) => {
        const amount = e.target.value
        const previousState = { ...this.state }
        previousState.performance.q2_2018 = amount
        this.setState(previousState)
    }

    onNewPerfQ318Change = (e) => {
        const amount = e.target.value
        const previousState = { ...this.state }
        previousState.performance.q3_2018 = amount
        this.setState(previousState)
    }

    onNewPerfQ418Change = (e) => {
        const amount = e.target.value
        const previousState = { ...this.state }
        previousState.performance.q4_2018 = amount
        this.setState(previousState)
    }

    onNewPerfQ119Change = (e) => {
        const amount = e.target.value
        const previousState = { ...this.state }
        previousState.performance.q1_2019 = amount
        this.setState(previousState)
    }

    onNewPerfQ219Change = (e) => {
        const amount = e.target.value
        const previousState = { ...this.state }
        previousState.performance.q2_2019 = amount
        this.setState(previousState)
    }

    onNewPerfQ319Change = (e) => {
        const amount = e.target.value
        const previousState = { ...this.state }
        previousState.performance.q3_2019 = amount
        this.setState(previousState)
    }

    onNewPerfQ419Change = (e) => {
        const amount = e.target.value
        const previousState = { ...this.state }
        previousState.performance.q4_2019 = amount
        this.setState(previousState)
    }

    createNewPerfData = (e) => {
        e.preventDefault()
        const id = this.props.targetId
        const newData = this.state.performance
        this.props.addFinData(newData, id)
    }

    render() {
        return (
            <FadeIn>
                <div>
                    <form
                        onSubmit={this.createNewPerfData}
                        className='card--form'>
                        <input
                            type='number'
                            placeholder='2018 Q1 Net Profit'
                            name="q1_2018"
                            required="required"
                            onChange={this.onNewPerfQ118Change}
                            value={this.state.performance.q1_2018}
                        />
                        <input
                            type='number'
                            placeholder='2018 Q2 Net Profit'
                            name="q2_2018"
                            required="required"
                            onChange={this.onNewPerfQ218Change}
                            value={this.state.performance.q2_2018}
                        />
                        <input
                            type='number'
                            placeholder='2018 Q3 Net Profit'
                            name="q3_2018"
                            required="required"
                            onChange={this.onNewPerfQ318Change}
                            value={this.state.performance.q3_2018}
                        />
                        <input
                            type='number'
                            placeholder='2018 Q4 Net Profit'
                            name="q4_2018"
                            required="required"
                            onChange={this.onNewPerfQ418Change}
                            value={this.state.performance.q4_2018}
                        />
                        <input
                            type='number'
                            placeholder='2019 Q1 Net Profit'
                            name="q1_2019"
                            required="required"
                            onChange={this.onNewPerfQ119Change}
                            value={this.state.performance.q1_2019}
                        />
                        <input
                            type='number'
                            placeholder='2019 Q2 Net Profit'
                            name="q2_2019"
                            required="required"
                            onChange={this.onNewPerfQ219Change}
                            value={this.state.performance.q2_2019}
                        />
                        <input
                            type='number'
                            placeholder='2019 Q3 Net Profit'
                            name="q3_2019"
                            required="required"
                            onChange={this.onNewPerfQ319Change}
                            value={this.state.performance.q3_2019}
                        />
                        <input
                            type='number'
                            placeholder='2019 Q4 Net Profit'
                            name="q4_2019"
                            required="required"
                            onChange={this.onNewPerfQ419Change}
                            value={this.state.performance.q4_2019}
                        />
                        <input
                            type='submit'
                        />
                    </form>
                </div>
            </FadeIn>
        )
    }
}
