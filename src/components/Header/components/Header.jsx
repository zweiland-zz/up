import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import "../styles/base.css";
// import "../styles/bluehost.css";
// import "../styles/ipage.css";

import BrandLogo from './BrandLogo';
import HeaderHomeLink from './HeaderHomeLink';
import NavProfile from './NavProfile';
import Icon from '../../common/Icon/Icon';

// const {} = PropTypes;
// const propTypes = {};

function Header() {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <HeaderHomeLink
            showHeaderHomeLink
          />
          <BrandLogo
            brandName="Brand Name"
            logoImgUrl="/images/ipage-logo.svg"
            logoAlt="iPage"
            logoHeight="22"
           />
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav right">
            <li>
              <NavLink to="/search">
                <Icon iconName="search" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/activity">
                <Icon iconName="bell" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <Icon iconName="shopping-cart" />
              </NavLink>
            </li>
            <NavProfile displayUserIcon />
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Header.propTypes = propTypes;
export default Header;
