import React from 'react';
import PropTypes from 'prop-types';
import ReactJSON from 'react-json-view';

const Display = ({ display }) => (
  <ReactJSON
    src={display}
  />
);

Display.propTypes = {
  display: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

export default Display;
