import React, { Component } from 'react';



export default class input extends Component {
  state = {
    todo: '',
    id: 1
  }
  inputChange = (input) => {
    this.setState({
      todo: input.target.value
    })
  }
  submitButton = (parm) => {
    const id = parm.target.name
    const content = this.state.todo
    localStorage.setItem(id, content)
    this.setState({
      todo: '',
      id: this.state.id + 1
    })
    console.log(this.state.id)
    this.props.onCreate(this.state.id);
  }

  render() {
    return (
      <div>
        <input value={this.state.todo} onChange={this.inputChange} />
        <input onClick={this.submitButton} type="button" value="submit" name={this.state.id} />
      </div>
    )
  }
}