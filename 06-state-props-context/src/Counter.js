import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  };
  // 设置默认的props
  static defaultProps = {
    value: "123",
  };
  // 验证props
  static propTypes = {
    value: PropTypes.number.isRequired,
  };
  render() {
    return (
      <p>Content组件的props.value：{this.props.value}</p>
    )
  }
}

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  componentDidMount() {
    // console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          INCREMENT
        </button>
        <br/><br/>
        Counter组件的内部状态：
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <Content  value={this.state.value}/>
      </div>
    );
  }
}
