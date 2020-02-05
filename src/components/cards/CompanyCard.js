import React, { Component } from 'react'
import FinancialPerformance from './FinancialPerformance.js'
import ContactList from './ContactList.js'
import Data from '../../mock_data.js'

export default class CompanyCard extends Component {
    componentDidMount() {
        console.log('Companies', Data.companies)
    }
    render() {
        return (
            <div className='company'>
                <div className='company--header'>
                    <h2>{this.props.targetInfo.name}</h2>
                    <p>{this.props.targetInfo.info}</p>
                </div>
                <ContactList targetInfo={this.props.targetInfo} />
                <FinancialPerformance targetInfo={this.props.targetInfo} />
            </div>
        )
    }
}
