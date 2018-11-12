import React, { Component } from 'react'
import Item from './listItem'

export default class list extends Component {
  state = {
    data: 0
  }

  componentWillMount = () => {
    const index = this.props.item;
    let reserve = []
    for(let i = 0; i<=index; i++){
      reserve.push(i)
    }
    this.setState({
      data: reserve
    })
  }


  onRemove = (data) => {
    console.log(data)
  };

  render() {
    const dataForMap = this.state.data
    let list = dataForMap.map(index => (<Item key={index} contentId={index}/>))
    return (
      <div>
        {list}
      </div>
    )
  }
}
