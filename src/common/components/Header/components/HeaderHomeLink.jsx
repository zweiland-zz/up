import React from 'react';
import PropTypes from 'prop-types';
import { } from 'react-router';

const { bool } = PropTypes;
const propTypes = {
  displayHeaderHomeLink: bool
};
const defaultProps = {
  displayHeaderHomeLink: false,
}

function HeaderHomeLink(props) {
  return (
    <div className={"navbar-brand home-link " + props.displayHeaderHomeLink && "hide"}>
      <a href="./#/">
        <span className="glyphicon glyphicon-home home-link" />
      </a>
    </div>
  );
}

HeaderHomeLink.propTypes = propTypes;
export default HeaderHomeLink;
