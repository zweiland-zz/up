import React from 'react';

export default class Icon extends React.Component {
  render() {
    return (
      <i className={"glyphicon glyphicon-" + this.props.iconName} aria-hidden="true" />
    )
  }
}
