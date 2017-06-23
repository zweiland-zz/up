

import React from 'react';
import PropTypes from 'prop-types';
import { } from 'react-router';

const { bool } = PropTypes;
const propTypes = {
  showMenuToggle: bool
};
const defaultProps = {
  showMenuToggle: false,
}

function MenuToggle(props) {
  return (
    <button type="button" id="menu-toggle" className={"glyphicon glyphicon-menu-hamburger btn-menu toggle"+ (props.showMenuToggle ? ' show' : ' hide')}>
      <i className="fa fa-bars" />
    </button>

  );
}

MenuToggle.propTypes = propTypes;
export default MenuToggle;
