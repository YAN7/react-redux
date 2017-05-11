import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
    }
  };
  static propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };
  render() {
    return (
      <button style={{ background: this.props.color }}>
        {this.props.children}
      </button>
    )
  }
}

class Message extends Component {
  constructor() {
    super();
  };
  static defaultProps = {
  };
  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };
  render() {
    return (
      <li>
        {this.props.text} <Button color={this.props.color}>Delete</Button>
      </li>
    );
  }
}

class MessageList extends Component {
  // const color = 'yellow';
  // const messages = [
  //   { text: 'Hello React' },
  //   { text: 'Hello Redux' }
  // ];
  constructor(props) {
    super(props);
    this.state = {
      color: 'yellow',
      messages: [
        { text: 'Hello React' },
        { text: 'Hello Redux' },
      ],
    }
  };
  children() {
    return (
      this.state.messages.map((message, key) =>
        <Message key={key} text={message.text} color={this.state.color}/>
      )
    )
  };
  render() {
    return (
      <div>
        <p>通过props将color逐层传递给里面的Button组件</p>
        <ul>
          {this.children()}
        </ul>
      </div>
    );
  }
}

export default MessageList;
