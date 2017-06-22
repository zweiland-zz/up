import React from 'react';
import PropTypes from 'prop-types';
import { } from 'react-router';

import BrandLogo from '../../BrandLogo/components/BrandLogo';
import HeaderHomeLink from './HeaderHomeLink';
import NavProfile from './NavProfile';

// const {} = PropTypes;
const propTypes = {
};

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
              <a href="./#/">
                <i className="glyphicon glyphicon-search" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="./#/">
                <i className="glyphicon glyphicon-bell" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="./#/">
                <i className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />
              </a>
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
