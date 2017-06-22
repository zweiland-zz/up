import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {
  text: string
};

function Title(props) {
  return (
    <p />
  );
}

Title.propTypes = propTypes;
export default Title;
