import React, { Component } from 'react'
import Input from './input'
import List from './list'
export default class App extends Component {
  state = {
    number: ''
  }

  localStorage = (number) => {
    this.setState({
      number
    })
  }

  render() {
    console.log(this.state.number);
    return (
      <div>
        <Input onCreate ={this.localStorage} />
        <List item ={this.state.number}/>
      </div>
    )
  }
}


