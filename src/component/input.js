import React, { Component } from 'react';



export default class input extends Component {
  state = {
    todo: '',
    id: 1
  }
  inputChange = (input) => {
    if (input.target.value !== null) {
      this.setState({
        todo: input.target.value
      })
    }
    else {
      alert("값을 넣어")
    }
  }
  submitButton = (parm) => {
    const id = parm.target.name;

    const content = this.state.todo;
    if (content !== '') {
      localStorage.setItem(id, content)
      this.setState({
        todo: '',
        id: this.state.id + 1
      })
      this.props.onCreate(this.state.id);
    }
    else {
    }
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