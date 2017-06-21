import React from 'react';
import PropTypes from 'prop-types';
import { } from 'react-router';

import BrandLogo from '../../BrandLogo/components/BrandLogo';

const { string } = PropTypes;
const propTypes = {

};

function Header(props) {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="navbar-brand home-link hide">
            <a href="./#/">
              <span className="glyphicon glyphicon-home home-link" />
            </a>
          </div>
          <BrandLogo />
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
            <li>
              <a href="./#/">
                <i className="glyphicon glyphicon-user" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = propTypes;
export default Header;
