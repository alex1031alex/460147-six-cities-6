import {CardType, ImageSize} from '../const.js';

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
