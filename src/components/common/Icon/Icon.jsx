import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {
  iconName: string
};

function Icon(props) {
  return (
    <i className={"glyphicon glyphicon-" + props.iconName} aria-hidden="true" />
  );
}

Icon.propTypes = propTypes;
export default Icon;
