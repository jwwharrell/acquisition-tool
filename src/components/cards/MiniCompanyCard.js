import React, { Component } from 'react'
import FadeIn from 'react-fade-in'


export default class MiniCompanyCard extends Component {

    onTargetSelect = () => {
        this.props.targetSelect(this.props.targetId)
    }

    onTargetDelete = () => {
        this.props.targetDelete(this.props.targetId)
    }

    render() {
        return (
            <FadeIn>
                <div className='miniCard'>
                    <h3
                        onClick={this.onTargetSelect}
                    >{this.props.name}</h3>
                    <span className='statusMark'>{this.props.status}</span>
                    <br />
                    <br />
                    <div
                        className='deleteBtn'
                    >
                        <button
                            onClick={this.onTargetDelete}
                        >
                            Delete
                </button>
                    </div>
                </div>
            </FadeIn>   
        )
    }
}
