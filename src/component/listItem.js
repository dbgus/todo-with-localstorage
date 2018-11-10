import React, { Component } from 'react'
import Check from '../img/check.png';
import Delete from '../img/delete.png';
import Circle from '../img/circle.png';
export default class listItem extends Component {
  state = {
    check: false
  }
  todoCheck = (e) => {
    if (!this.state.check) {
      this.setState({
        check: true
      })
    }
    else{
      this.setState({
        check: false
    })
    }

  }
  render() {
    const data = this.props.contentId;
    const list = localStorage.getItem(data);
    return (
      <div>
        {list}
        <img src={this.state.check ? Check : Circle} alt="check" onClick={this.todoCheck} />
        <img src={Delete} alt="delete" />
      </div>
    )
  }
}
