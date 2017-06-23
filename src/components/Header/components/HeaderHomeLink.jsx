import React from 'react';
import PropTypes from 'prop-types';
import { } from 'react-router';

const { bool } = PropTypes;
const propTypes = {
  showHeaderHomeLink: bool
};
const defaultProps = {
  showHeaderHomeLink: false,
}

function HeaderHomeLink(props) {
  return (
    <div className={"navbar-brand home-link"+ (props.showHeaderHomeLink ? ' show' : ' hide')}>
      <a href="./#/">
        <span className="glyphicon glyphicon-home home-link" />
      </a>
    </div>
  );
}

HeaderHomeLink.propTypes = propTypes;
export default HeaderHomeLink;
