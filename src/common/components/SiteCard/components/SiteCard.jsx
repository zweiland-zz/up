import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {
  siteImgUrl: string.isRequired,
  siteName: string.isRequired,
  siteDomain: string,
  siteClass: string,
};

function SiteCard(props) {
  return (
    <div class="col-md-4">
        <div class='panel panel-default align-center domain-name ${props.siteClass}-site'>
          <div class="panel-heading">
            <div class="site-thumb" />
          </div>
          <div class="panel-body">
            <h3>
              <a href="./#/">{props.siteDomain}</a>
            </h3>
            <ul class="nav nav-pills site-status">
              <li role="presentation" class="active">
                <a href="./#/">Live</a>
              </li>
              <li role="presentation">
                <a href="./#/">Private</a>
              </li>
              <li role="presentation">
                <a href="./#/">SSL</a>
              </li>
              <li role="presentation">
                <a href="./#/">Renew</a>
              </li>
            </ul>
            <p>external domain</p>
          </div>
          <div class="panel-footer">
            <a class="manage" href="./#/">
              <strong>Manage</strong>
            </a>
          </div>
        </div>
    </div>
  );
}

SiteCard.propTypes = propTypes;
export default SiteCard;
