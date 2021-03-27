import {NameSpace} from '../root-reducer';

export const getActiveSortType = (state) => state[NameSpace.OFFERS].activeSortType;
export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getOffer = (state) => state[NameSpace.OFFERS].offer;
export const getReviews = (state) => state[NameSpace.OFFERS].reviews;
export const getNearbyOffers = (state) => state[NameSpace.OFFERS].nearbyOffers;
export const getLoadedOffersStatus = (state) => state[NameSpace.OFFERS].isOffersLoaded;
