import React, { Component } from 'react'

export default class TargetList extends Component {

    onTargetSelect = (e) => {
        this.props.targetSelect(e.target.value)
    }

    onTargetDelete = (e) => {
        this.props.targetDelete(e.target.value)
    }

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
                                <button className='listBtn'
                                    value={target.id}
                                    onClick={this.onTargetSelect}
                                >
                                    {target.name}
                                </button>
                                <br />
                                <button
                                    className='deleteBtn'
                                    value={target.id}
                                    onClick={this.onTargetDelete}
                                >
                                    Delete
                            </button>
                            <br />
                            <br />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
