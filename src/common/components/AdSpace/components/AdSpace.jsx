import React from 'react';
import PropTypes from 'prop-types';

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
        <div className="adSpace">
          <div className="panel panel-default">
            <p className="adSpace_title">Ad Space</p>
          </div>
        </div>
      )}
    </div>
  );
}

AdSpace.propTypes = propTypes;
export default AdSpace;
