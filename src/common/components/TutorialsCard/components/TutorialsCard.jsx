import React from 'react';
import PropTypes from 'prop-types';

const { } = PropTypes;
const propTypes = {
};

function TutorialsCard(props) {
  return (
    <div className="panel panel-default align-center content-well">
      <div className="panel-body">
        <h4>Video Tutorials</h4>
        <div className="well well-lg video-well"></div>
        <button type="button" className="btn btn-default">View Library</button>
      </div>
    </div>
);
}

TutorialsCard.propTypes = propTypes;
export default TutorialsCard;
