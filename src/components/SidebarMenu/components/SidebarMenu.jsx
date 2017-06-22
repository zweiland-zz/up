import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import '../styles/bluehost.css';

const {} = PropTypes;
const propTypes = {

};

function SidebarMenu(props) {
  return (
    <div id="sidebar-wrapper">
      <nav id="spy">
        <ul className="nav nav-pills nav-stacked primary-nav">
          <li>
            <NavLink to="/" className="active">
              <span className="glyphicon glyphicon-home" aria-hidden="true" />
              <span className="fa fa-home solo">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sites">
              <span className="glyphicon wordpress-logo">
                <img src="/images/wordpress-logo.png" alt="WP" />
              </span>
              <span className="fa fa-anchor solo">My Sites</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/marketplace">
              <i className="glyphicon glyphicon-tag" aria-hidden="true" />
              <span className="fa fa-anchor solo">Marketplace</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/email">
              <i className="glyphicon glyphicon-envelope" aria-hidden="true" />
              <span className="fa fa-anchor solo">Email</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/domains">
              <i className="glyphicon glyphicon-globe" aria-hidden="true" />
              <span className="fa fa-anchor solo">Domains</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/advanced">
              <i className="glyphicon glyphicon-screenshot" aria-hidden="true" />
              <span className="fa fa-anchor solo">Advanced</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/help">
              <i className="glyphicon glyphicon-record" aria-hidden="true" />
              <span className="fa fa-anchor solo">Help</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat">
              <i className="glyphicon glyphicon-comment" aria-hidden="true" />
              <span className="fa fa-anchor solo">Live Chat</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// SidebarMenu.propTypes = propTypes;
export default SidebarMenu;
