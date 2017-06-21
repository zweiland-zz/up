import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {
  siteImgUrl: string,
  siteName: string,
  siteDomain: string,
  siteClass: string,
};
const defaultProps = {
  siteImgUrl: "/images/hd-site-thumb.png",
  siteName: "Site Name",
  siteDomain: "site-domain.com",
  siteClass: "site-name",
};
const siteImgUrlStye = {
  backgroundImage: 'url(' + this.siteImgUrl + ')'
}

function SiteCard(props) {
  return (
    <div className="col-md-4">
      <div className={"panel panel-default align-center domain-name " + props.siteClass + "-site"}>
        <div className="panel-heading">
          <div className="site-thumb" style={siteImgUrlStye}>
          </div>
        </div>
        <div className="panel-body">
          <h3>
            <a href="./#/">{props.siteDomain}</a>
          </h3>
          <ul className="nav nav-pills site-status">
            <li role="presentation" className="active">
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
        <div className="panel-footer">
          <a className="manage" href="./#/">
            <strong>Manage</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

SiteCard.propTypes = propTypes;
export default SiteCard;
