import React, { Component } from 'react'
import Input from './input'
import List from './list'

export default class App extends Component {
  state = {
    number : 0
  }

  localStorage = (number) => {
    this.setState({
      number: number
    })
  }

  render() {
    return (
      <div>
        <Input onCreate={this.localStorage} />
        <List item ={this.state.number}/>
      </div>
    )
  }
}


