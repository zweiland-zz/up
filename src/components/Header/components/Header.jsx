import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import "../styles/bluehost.css";
// import "../styles/ipage.css";

import BrandLogo from './BrandLogo';
import HeaderHomeLink from './HeaderHomeLink';
import NavProfile from './NavProfile';

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
            logoImgUrl="/images/bluehost-logo.png"
            logoAlt="Bluehost"
            logoHeight="34"
           />
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav right-nav">
            <li>
              <NavLink to="/search">
                <i className="glyphicon glyphicon-search" aria-hidden="true" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/activity">
                <i className="glyphicon glyphicon-bell" aria-hidden="true" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <i className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />
              </NavLink>
            </li>
            <NavProfile
              displayUserIcon
             />
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = propTypes;
export default Header;
