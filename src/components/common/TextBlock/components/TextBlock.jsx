import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {
  text: string
};

function Text(props) {
  return (
    <p />
  );
}

Text.propTypes = propTypes;
export default Text;
