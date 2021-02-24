import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Offer from '../offer/offer.jsx';

const OffersList = (props) => {
  const [, setActiveCard] = useState(null);

  const handleMouseEnter = (offer) => {
    setActiveCard(offer);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  const {offersCount, offers, cardType} = props;
  const offersTemplate = offers
    .slice(0, Math.min(offersCount, offers.length))
    .map((offer) => {
      return <Offer
        key={`offer` + offer.id}
        offer={offer}
        cardType={cardType}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
  cardType: PropTypes.string.isRequired
};

export default OffersList;
