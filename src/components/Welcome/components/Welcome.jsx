import React from 'react';
import PropTypes from 'prop-types';

// const { } = PropTypes;
const propTypes = {
};

function Welcome(props) {
  return (
    <div className="col-md-8">
      <div className="panel panel-default primary-cta content-well">
        <div className="panel-body">
          <h2>Bluehost &amp; WordPress</h2>
          <p>Bluehost has been recommended by WordPress for over ten years. To take the first step in creating your website, click the button below.</p>
          <button type="button" className="btn btn-primary">Get Started on WordPress</button>
          <a href="">Learn More</a>
        </div>
      </div>
    </div>
  );
}

Welcome.propTypes = propTypes;
export default Welcome;
