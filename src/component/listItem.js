import React, { Component } from 'react'

export default class listItem extends Component {
  render() {
    const data= this.props.contentId;
    const list = localStorage.getItem(data);
    return (
      <div>
        {list}
      </div>
    )
  }
}
