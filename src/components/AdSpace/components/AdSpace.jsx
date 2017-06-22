import React from 'react';
import PropTypes from 'prop-types';

import '../styles/base.css';
// import '../styles/ipage.css';

const { string, bool } = PropTypes;
const propTypes = {
  displayAdSpace: bool,
};
const defaultProps = {
  displayAdSpace: false,
}

function AdSpace(props) {
  return (
    <div>
      {props.displayAdSpace && (
        <div className="ad-space">
          <div className="panel panel-default">
            <p className="ad-space--title">Ad Space</p>
          </div>
        </div>
      )}
    </div>
  );
}

AdSpace.propTypes = propTypes;
export default AdSpace;
