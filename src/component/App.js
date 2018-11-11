import React, { Component } from 'react'
import Input from './input'
import List from './list'

export default class App extends Component {
  state = {
    Index: 0,
    updatae: false,

  }

  componentWillMount = () => {
    if (this.state.updatae) {
      console.log(2)
    }
    else {
      const LocalIndex = localStorage.length;
      this.setState({
        Index: LocalIndex,
        updatae: true
      })
      console.log(1)
    }
  }


  render() {
    return (
      <div >
        <Input onCreate={this.ChangelocalStorage} Index={this.state.Index} />
        <List item={this.state.Index} />
      </div >
    )
  }
}


