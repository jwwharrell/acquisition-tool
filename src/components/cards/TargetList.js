import React, { Component } from 'react'

export default class TargetList extends Component {
    render() {
        return (
            <ul className='card'>
                {this.props.listOfTargets.map((target, index) => {
                    return (
                        <li key={index}>{target.name}</li>
                    )
                })}
            </ul>
        )
    }
}
