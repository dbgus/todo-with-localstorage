import React, { Component } from 'react';



export default class input extends Component {
  state = {
    todo : ''
  }
  inputChange = (input) => {
    this.setState({
      todo: input.target.value
    })
  }
  submitButton = () => {
    
  }

  render() {
    return (
      <div>
           <input value={this.state.todo} onChange={this.inputChange} />
           <input onClick={}/>
      </div>
    )
  }
}