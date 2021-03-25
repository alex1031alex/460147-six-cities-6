import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {CardType} from '../../const';
import Offer from '../offer/offer';

const OffersList = (props) => {
  const {offers, cardType, onMouseEnter, onMouseLeave} = props;
  const offersTemplate = offers
    .map((offer) => {
      return <Offer
        key={`offer` + offer.id}
        offer={offer}
        cardType={cardType}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />;
    });

  return (
    <div className={cn({
      'places__list': true,
      'cities__places-list tabs__content': cardType === CardType.CITY,
      'near-places__list': cardType === CardType.NEARBY,
    })}>
      {offersTemplate}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  cardType: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default OffersList;
