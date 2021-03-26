import {SortType, CardType, ImageSize} from '../const.js';

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

export const getCardClassName = (cardType) => {
  switch (cardType) {
    case CardType.FAVORITE: {
      return `favorites__card`;
    }
    case CardType.CITY: {
      return `cities__place-card`;
    }
    case CardType.NEARBY: {
      return `near-places__card`;
    }
  }

  return ``;
};

export const getImageSize = (cardType) => {
  switch (cardType) {
    case CardType.FAVORITE: {
      return {
        width: ImageSize.SMALL.width,
        height: ImageSize.SMALL.height
      };
    }
    default: {
      return {
        width: ImageSize.STANDARD.width,
        height: ImageSize.STANDARD.height
      };
    }
  }
};
