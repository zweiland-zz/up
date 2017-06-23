import React from 'react';

import "./styles/base.css";

export default class Button extends React.Component {
  render() {
    return (
      <button type="button" className={this.props.className}>{this.props.text}</button>
    )
  }
}
