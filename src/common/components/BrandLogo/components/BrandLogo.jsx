import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {

};

function BrandLogo(props) {
  return (
    <div className="navbar-brand">
      <a id="menu-toggle" className="logo" href="./#/">
        <img src="/images/bluehost-logo.png" alt="Bluehost" height="34" />
      </a>
    </div>
  );
}

BrandLogo.propTypes = propTypes;
export default BrandLogo;
