import React from 'react';
import PropTypes from 'prop-types';

import '../styles/base.css';

const { string } = PropTypes;
const propTypes = {
};

function HelpCard(props) {
  return (
    <div className="panel panel-default content-well help-center">
      <div className="panel-body">
        <h4>Need Some Guidance?</h4>
        <p>
          <input
            type="text"
            className="form-control"
            placeholder="Search the help center..."
            aria-describedby="basic-addon1"
          />
        </p>
        <p>
          <button type="button" className="btn btn-primary">Search Help</button>
        </p>
      </div>
    </div>
  );
}

HelpCard.propTypes = propTypes;
export default HelpCard;
