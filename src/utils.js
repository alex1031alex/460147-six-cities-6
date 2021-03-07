import {SortType} from './const.js';

export const getOffersByCity = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_INC: {
      return [...offers].sort((a, b) => a.price - b.price);
    }
    case SortType.PRICE_DEC: {
      return [...offers].sort((a, b) => b.price - a.price);
    }
    case SortType.RATING: {
      return [...offers].sort((a, b) => b.rating - a.rating);
    }
    default: {
      return [...offers];
    }
  }
};
