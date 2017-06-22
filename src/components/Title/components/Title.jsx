import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {
  dashTitle: string,
};
const defaultProps = {
  dashTitle: "Dashboard",
};

function Title(props) {
  return (
    <h1 className="title">{props.dashTitle}</h1>
  );
}

Title.propTypes = propTypes;
export default Title;
