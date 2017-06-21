import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {

};

function SidebarMenu(props) {
  return (
    <div id="sidebar-wrapper">
      <nav id="spy">
        <ul className="nav nav-pills nav-stacked primary-nav">
          <li>
              <a href="#home" className="active"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> <span className="fa fa-home solo">Home</span></a>
          </li>
          <li>
            <a href="#anch1">
              <span className="glyphicon wordpress-logo">
                <img src="img/wordpress-logo.png" alt="WP" />
              </span>
              <span className="fa fa-anchor solo">WordPress</span>
            </a>
          </li>
          <li>
            <a href="#anch2">
              <i className="glyphicon glyphicon-tag" aria-hidden="true" />
              <span className="fa fa-anchor solo">Marketplace</span>
            </a>
          </li>
          <li>
            <a href="#anch3">
              <i className="glyphicon glyphicon-envelope" aria-hidden="true" />
              <span className="fa fa-anchor solo">Email</span>
            </a>
          </li>
          <li>
            <a href="#anch4">
              <i className="glyphicon glyphicon-globe" aria-hidden="true" />
              <span className="fa fa-anchor solo">Domains</span>
            </a>
          </li>
          <li>
            <a href="#anch4">
              <i className="glyphicon glyphicon-screenshot" aria-hidden="true" />
              <span className="fa fa-anchor solo">Advanced</span>
            </a>
          </li>
          <li>
            <a href="#anch4">
              <i className="glyphicon glyphicon-record" aria-hidden="true" />
              <span className="fa fa-anchor solo">Help</span>
            </a>
          </li>
          <li>
            <a href="#anch4">
              <i className="glyphicon glyphicon-comment" aria-hidden="true" />
              <span className="fa fa-anchor solo">Live Chat</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

SidebarMenu.propTypes = propTypes;
export default SidebarMenu;
