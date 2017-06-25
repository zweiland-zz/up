import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from './theme-a.css';

/* component/index.js */
export default class Logo extends Component {
  // constructor(theme) {
  //   this.theme = theme;
  // }
  render() {
    return (
      <div className={styles.logo} />
    )
  }
}
