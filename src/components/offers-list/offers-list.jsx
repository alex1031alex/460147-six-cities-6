import React from 'react';
import PropTypes from 'prop-types';

import Offer from '../offer/offer.jsx';

const OffersList = (props) => {
  const {offersCount, offers} = props;
  const offersTemplate = offers
    .slice(0, Math.min(offersCount, offers.length))
    .map((offer) => {
      return <Offer
        key={`offer` + offer.id}
        offer={offer}
      />;
    });

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersTemplate}
    </div>
  );
};

OffersList.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default OffersList;
