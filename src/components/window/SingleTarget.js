import React, { Component } from 'react'

export default class SingleTarget extends Component {
    
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.info}</p>
            </div>
        )
    }
}
