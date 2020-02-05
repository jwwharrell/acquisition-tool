import React, { Component } from 'react'

export default class SingleTarget extends Component {
    
    render() {
        return (
            <div className='card'>
                <h2>{this.props.targetInfo.name}</h2>
                <p>Company Info: <br />
                {this.props.targetInfo.info}</p>
                <button>Add Key Contacts</button>
                <button>Add Performance Data</button>
            </div>
        )
    }
}
