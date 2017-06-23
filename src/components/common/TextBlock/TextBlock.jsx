import React from 'react';

export default class TextBlock extends React.Component {
  render() {
    return (
      <p>{this.props.text}</p>
    )
  }
}
