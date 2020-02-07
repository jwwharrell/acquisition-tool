import React, { Component } from 'react'

export default class TargetList extends Component {

    onTargetSelect = (e) => {
        this.props.targetSelect(e.target.value)
    }

    onTargetDelete = (e) => {
        this.props.targetDelete(e.target.value)
    }

    render() {
        return (
            <div className='targetList'>
                <ul>
                    <h2>Target List</h2>

                    {this.props.listOfTargets.map((target, index) => {
                        return (
                            <li key={'targetList' + index.toString()}>
                                <button className='defaultBtn'
                                    value={target.id}
                                    onClick={this.onTargetSelect}
                                >
                                    {target.name}
                                </button>
                                <button
                                    value={target.id}
                                    onClick={this.onTargetDelete}
                                >
                                    Delete Target
                            </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
