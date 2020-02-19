import React, { Component } from 'react'
import MiniCompanyCard from './MiniCompanyCard'

export default class TargetList extends Component {

    onSearchTargetNameChange = (e) => {
        const targetSearchValue = e.target.value
        this.props.targetSearch(targetSearchValue)
    }

    render() {
        return (
            <div className='targetList'>
                <ul>
                    <h2>Target List</h2>
                    <form>
                        <input
                            type='text'
                            placeholder='Search'
                            name="companyName"
                            onChange={this.onSearchTargetNameChange}
                        />
                    </form>
                    {this.props.listOfTargets.map((target, index) => {
                        return (
                            <li key={'targetList' + index.toString()}>
                                <MiniCompanyCard 
                                    name={target.name}
                                    status={target.status}
                                    targetSelect={this.props.targetSelect}
                                    targetId={target.id}
                                    targetDelete={this.props.targetDelete}
                                />
                                <br />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
