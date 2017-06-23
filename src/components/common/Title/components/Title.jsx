import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <h3 className={"font-size-"+this.props.tSize}>this.props.text</h3>
    )
  }
}
