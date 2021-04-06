import React from 'react';
import PropTypes from 'prop-types';

const Warning = (props) => {
  const {description} = props;

  return (
    <div>
      <h4>An error occured!</h4>
      <p>{description}</p>
      <p>You could try again later.</p>
    </div>
  );
};

Warning.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Warning;
