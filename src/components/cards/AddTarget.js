import React, { Component } from 'react'

export default class AddTarget extends Component {
    render() {
        return (
            <div className='card'>
                <form>
                    Company Name:
                    <input type='text' />
                    <br />
                    Company Info:
                    <input type='text' />
                    <br />
                    Status:
                    <input type='text' />
                    <br />
                    Key Contacts:
                    <input type='text' />
                    <br />
                    Financial Performance:
                    <input type='text' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
