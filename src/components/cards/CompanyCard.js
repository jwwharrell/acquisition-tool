import React, { Component } from 'react'
import FinancialPerformance from './FinancialPerformance.js'
import ContactList from './ContactList.js'

export default class CompanyCard extends Component {
    
    render() {
        return (
            <div className='company'>
                <div className='company--header'>
                    <h2>{this.props.targetInfo.name}</h2>
                    <span className='statusMark'>{this.props.targetInfo.status}</span>
                    <p>{this.props.targetInfo.info}</p>
                </div>
                <ContactList 
                    targetInfo={this.props.targetInfo}
                    addContact={this.props.addContact}
                />
                <FinancialPerformance 
                    targetInfo={this.props.targetInfo}
                    addFinData={this.props.addFinData}
                />
            </div>
        )
    }
}
