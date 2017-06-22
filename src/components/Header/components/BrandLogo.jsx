import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {
  logoImgUrl: string.isRequired,
  logoAlt: string.isRequired,
  logoHeight: string,
};

function BrandLogo(props) {
  return (
    <div className="navbar-brand">
      <a id="menu-toggle" className="logo" href="/">
        <img src={props.logoImgUrl} alt={props.logoAlt} height={props.logoHeight} />
      </a>
    </div>
  );
}

BrandLogo.propTypes = propTypes;
export default BrandLogo;
