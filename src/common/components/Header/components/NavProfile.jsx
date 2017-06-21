import React from 'react';
import PropTypes from 'prop-types';
import { } from 'react-router';

const arrowStyle = {
  fontSize: "10px"
}

const { string, bool } = PropTypes;
const propTypes = {
  displayProfilePic: true,
  displayUserIcon: false,
  displayWords: false,
  displayArrow: false,
  words: string
};
const defaultProps = {
  displayProfilePic: true,
  displayUserIcon: false,
  displayWords: false,
  displayArrow: false,
  words: "My Account"
}

function NavProfile(props) {
  return (
    <li>
      <a href="./#/">
        {props.displayUserIcon && (
        <i className="glyphicon glyphicon-user" aria-hidden="true" />
        )}
        {props.displayProfilePic && (
        <div className="avatar avatar-small">
          <img src="/images/profile.jpeg" alt="profile" />
        </div>
        )}
        {props.displayWords && (
        <span>{props.words}</span>
        )}
        {props.displayArrow && (
        <span className="glyphicon glyphicon-triangle-bottom" style={arrowStyle} />
        )}
      </a>
    </li>
  );
}

NavProfile.propTypes = propTypes;
export default NavProfile;
