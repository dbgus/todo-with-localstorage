import React, { Component } from 'react'
import Item from './listItem'

export default class list extends Component {
  state = {
    data: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      return { data: nextProps.item };
    }
  }

  onRemove = (data) => {
    console.log(data)
  };

  render() {
    // const data = this.state.data;
    // let list = []
    // if (data !== undefined) {
    //   list = data.map(index => (index === 0 ? '' : <Item key={index} contentId={index} />))
    // }

    return (
      <div>
        {/* {list} */}
      </div>
    )
  }
}
