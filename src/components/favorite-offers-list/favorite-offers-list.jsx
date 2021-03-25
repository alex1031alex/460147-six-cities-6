import React from 'react';
import PropTypes from 'prop-types';

import Offer from '../offer/offer';

const FavoriteOffersList = (props) => {
  const {cityName, offers, cardType} = props;

  const offersTemplate = offers
    .map((offer) => {
      return <Offer
        key={`offer` + offer.id}
        offer={offer}
        cardType={cardType}
      />;
    });

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offersTemplate}
      </div>
    </li>
  );
};

FavoriteOffersList.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default FavoriteOffersList;
