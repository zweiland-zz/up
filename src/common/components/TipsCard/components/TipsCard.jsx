import React from 'react';
import PropTypes from 'prop-types';

const { } = PropTypes;
const propTypes = {

};

function TipsCard(props) {
  return (
    <div className="panel panel-default tips-panel content-well">
      <div className="panel-body">
        <h4>Tips and Insights</h4>
        <ul>
          <li>
            <p><strong>Where to Begin</strong><br />
            If you're serious about your site, consider <a href="#">choosing WordPress.</a>
            WordPress powers 27% of websites worldwide!</p>
          </li>
          <li>
            <p><strong>You've Got This!</strong><br />
              Around 75% of websites today are not active, but parked domains or similar. If you need help getting your site up and running at any point, <a href="">just ask!</a></p>
          </li>
        </ul>
      </div>
    </div>
);
}

TipsCard.propTypes = propTypes;
export default TipsCard;
