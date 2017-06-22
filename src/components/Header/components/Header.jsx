import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import "../styles/bluehost.css";
// import "../styles/ipage.css";

import BrandLogo from './BrandLogo';
import HeaderHomeLink from './HeaderHomeLink';
import NavProfile from './NavProfile';
import Icon from '../../common/Icon/Icon';

const {} = PropTypes;
const propTypes = {};

function Header(props) {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <HeaderHomeLink />
          <button id="menu-toggle" className="glyphicon glyphicon-menu-hamburger btn-menu toggle">
            <i className="fa fa-bars" />
          </button>
          <BrandLogo
            logoImgUrl="/images/bluehost-logo.svg"
            logoAlt="Bluehost"
            logoHeight="24"
           />
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav right-nav">
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

Header.propTypes = propTypes;
export default Header;
