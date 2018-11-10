import React, { Component } from 'react'
import Item from './listItem'

export default class list extends Component {

  render() {
    let itemLenght = [];
    const nowNumber = this.props.item
    for (let i = 1; i <= nowNumber ; i++) {
      itemLenght.push(i);
    }
    const list = itemLenght.map(index => (<Item key={index} contentId={index} />));
    return (
      <div>
        {list}
      </div>
    )
  }
}
