import React from 'react';
import PropTypes from 'prop-types';
import { } from 'react-router';

const { bool } = PropTypes;
const propTypes = {
  displayHeaderHomeLink: false
};
const defaultProps = {
  displayHeaderHomeLink: false,
}

function HeaderHomeLink(props) {
  return (
    <div>
      {props.displayHeaderHomeLink && (
        <div className="navbar-brand home-link">
          <a href="./#/">
            <span className="glyphicon glyphicon-home home-link" />
          </a>
        </div>
      )}
    </div>
  );
}

HeaderHomeLink.propTypes = propTypes;
export default HeaderHomeLink;
