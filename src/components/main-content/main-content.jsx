import React from 'react';
import PropTypes from 'prop-types';
import MainNoOffers from '../main-empty/main-empty';

const MainContent = (props) => {
  const {isOffersAvailable, children} = props;

  return (
    <div className="cities">
      {isOffersAvailable ? children : <MainNoOffers />}
    </div>
  );
};

MainContent.propTypes = {
  isOffersAvailable: PropTypes.bool.isRequired,
  children: PropTypes.object,
};

export default MainContent;
