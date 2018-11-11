import React, { Component } from 'react';



export default class input extends Component {
  state = {
    todo: '',
    id: 0
  }


  // static getDerivedStateFromProps(nextProps, prevState) {
  //   // // 여기서는 setState 를 하는 것이 아니라
  //   // // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
  //   // // 사용됩니다.
  //   // /*
  //   if (nextProps.Index !== prevState.id) {
  //     return { id: nextProps.Index };
  //   }
  //   return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  // }

  componentWillMount() {
    this.setState({
      id: this.props.Index
    })
  }


  inputChange = (input) => {
    if (input.target.value !== null) {
      this.setState({
        todo: input.target.value
      })
    }
    else {
      alert("값을 넣어")
    }
  }
  submitButton = (parm) => {
    const id = this.state.id;
    const content = this.state.todo;
    if (content !== '') {
      localStorage.setItem(id, content)

      this.setState({
        todo: '',
        id: this.state.id + 1
      })

    }
  }

  localClear = () => {
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <input value={this.state.todo} onChange={this.inputChange} />
        <input onClick={this.submitButton} type="submit" value="submit" />
        <input onClick={this.localClear} value="clear" type="button" />
      </div>
    )
  }
}