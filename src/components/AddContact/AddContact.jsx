import React, { Component } from 'react'

export default class AddContact extends Component {
  render() {
    return (
        <div className='ui main'>
            <h2>Add Contact</h2>
        <form className='ui form'>
        <div className='field'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" placeholder='Name'/>
        </div>
        <div className='field'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" placeholder='Email'/>
        </div>
        <button className="ui button blue "> Add </button>
      </form>
      </div>
    )
  }
}
