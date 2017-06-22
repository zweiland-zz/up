import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const { string } = PropTypes;
const propTypes = {
  logoImgUrl: string.isRequired,
  logoAlt: string.isRequired,
  logoHeight: string,
};

function BrandLogo(props) {
  return (
    <div className="navbar-brand">
      <NavLink to="/" className="logo" id="menu-toggle">
        <img src={props.logoImgUrl} alt={props.logoAlt} height={props.logoHeight} />
      </NavLink>
    </div>
  );
}

BrandLogo.propTypes = propTypes;
export default BrandLogo;
