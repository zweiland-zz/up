import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import "../styles/base.css";

import BrandLogo from './BrandLogo';
import HeaderHomeLink from './HeaderHomeLink';
import NavProfile from './NavProfile';
import Icon from '../../common/Icon/Icon';

export default class Header extends React.Component {
  render() {
    const bluehost = 0;
    const ipage = 1;
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">

            {ipage == 0 ? <HeaderHomeLink showHeaderHomeLink /> : ''}

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
                  <Icon iconName="question-sign" />
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
              <NavProfile
                displayUserIcon
                displayWords
                words="My Account"
                displayArrow
              />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
