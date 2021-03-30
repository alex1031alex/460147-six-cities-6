import React from 'react';
import PropTypes from 'prop-types';
import MainNoOffers from '../main-no-offers/main-no-offers';

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
