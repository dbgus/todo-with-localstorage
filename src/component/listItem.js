import React, { Component } from 'react'
import Check from '../img/check.png';
import Delete from '../img/delete.png';
import Circle from '../img/circle.png';


export default class listItem extends Component {
  state = {
    check: false,
    data: ''
  }
  
  todoCheck = (e) => {
    if (!this.state.check) {
      this.setState({
        check: true
      })
    }
    else {
      this.setState({
        check: false
      })
    }
  }
  todoDelete = () => {
    localStorage.removeItem(this.state.data);
    const onRemove = this.props.onRemove;
  }

  render() {
    const data = this.props.contentId;
    const list = localStorage.getItem(data);
    return (
      <div>
        {list}
        <img src={this.state.check ? Check : Circle} alt="check" onClick={this.todoCheck} />
        <img src={Delete} alt="delete" onClick={this.todoDelete} />
      </div>
    )
  }
}
