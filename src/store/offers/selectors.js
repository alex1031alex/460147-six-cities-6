import {createSelector} from 'reselect';

import {NameSpace} from '../root-reducer';
import {getActiveCity} from '../city/selectors';
import {SortType} from '../../const';

export const getActiveSortType = (state) => state[NameSpace.OFFERS].activeSortType;
export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getOffer = (state) => state[NameSpace.OFFERS].offer;
export const getReviews = (state) => state[NameSpace.OFFERS].reviews;
export const getNearbyOffers = (state) => state[NameSpace.OFFERS].nearbyOffers;
export const getLoadedOffersStatus = (state) => state[NameSpace.OFFERS].isOffersLoaded;

export const getOffersByCity = createSelector(
    [getOffers, getActiveCity],
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city);
    }
);

export const getSortedOffers = createSelector(
    [getOffersByCity, getActiveSortType],
    (offers, sortType) => {
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
    }
);
