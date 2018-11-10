import React, { Component } from 'react'
import Item from './listItem'

export default class list extends Component {

  state = {
    id:''
  }
  propsCatch = () => {
    const props = this.props;
    console.log(props)
  }

  render() {

    return (
      <div>
        
      </div>
    )
  }
}
