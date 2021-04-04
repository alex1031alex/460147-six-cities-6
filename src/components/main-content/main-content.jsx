import React from 'react';
import PropTypes from 'prop-types';
import MainEmpty from '../main-empty/main-empty';

const MainContent = (props) => {
  const {isOffersAvailable, children} = props;

  return (
    <div className="cities">
      {isOffersAvailable ? children : <MainEmpty />}
    </div>
  );
};

MainContent.propTypes = {
  isOffersAvailable: PropTypes.bool.isRequired,
  children: PropTypes.object,
};

export default MainContent;
