import React from 'react';
import PropTypes from 'prop-types';

import '../styles/base.css';

const { string } = PropTypes;
const propTypes = {
	filterLabel: string,
	filterLabelTwo: string,
	filterLabelThree: string,
};
const defaultProps = {
	filterLabel: "Tab One",
	filterLabelTwo: "Tab Two",
	filterLabelThree: "Tab Three",
};

function Filters(props) {
  return (
    <ul className="nav nav-pills pills-toggle right">
      <li role="presentation" className="active">
        <a href="./#/">{props.filterLabel}</a>
      </li>
      <li role="presentation">
        <a href="./#/">{props.filterLabelTwo}</a>
      </li>
      <li role="presentation">
        <a href="./#/">{props.filterLabelThree}</a>
      </li>
    </ul>
  );
}

Filters.propTypes = propTypes;
export default Filters;
