import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import MenuToggle from './MenuToggle';

const { string, bool } = PropTypes;
const propTypes = {
  brandName: string,
  logoImgUrl: string.isRequired,
  logoAlt: string.isRequired,
  logoHeight: string,
  displayLogoImg: bool,
};

function BrandLogo(props) {
  return (
    <div className="navbar-brand">
      <MenuToggle />
      <NavLink to="/" className="logo" id="menu-toggle">
        {props.displayLogoImg && (
        <img src={props.logoImgUrl} alt={props.logoAlt} height={props.logoHeight} />
        )}
        <span>{props.brandName}</span>
      </NavLink>
    </div>
  );
}

BrandLogo.propTypes = propTypes;
export default BrandLogo;
