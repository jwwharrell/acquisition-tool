import React, { Component } from 'react'

export default class TargetList extends Component {
    render() {
        return (
            <ul className='card'>
                <h2>Target List Component</h2>

                {this.props.listOfTargets.map((target, index) => {
                    return (
                        <li key={'target' + index.toString()}>{target.name}</li>
                    )
                })}
            </ul>
        )
    }
}
