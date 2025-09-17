import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

export default function Loading({ message = "Loading..." }) {
  return (
    <div className="loading">
      <div className="loading__container">
        <div className="loading__spinner"></div>
        <p className="loading__message">{message}</p>
      </div>
    </div>
  );
}

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: "Loading...",
};
