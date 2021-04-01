import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `city/change`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  SET_AUTH_INFO: `user/setAuthInfo`,
  RESET_AUTH_INFO: `user/resetAuthInfo`,
  CHANGE_SORT_TYPE: `offers/changeSortType`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_REVIEWS: `offers/loadReviews`,
  LOAD_OFFER_BY_ID: `offers/loadOfferById`,
  LOAD_NEARBY_OFFERS: `offers/loadNearbyOffers`,
  UPDATE_OFFERS: `offers/updateOffers`,
  UPDATE_OFFER: `offers/updateOffer`,
  UPDATE_NEARBY_OFFERS: `offers/updateNearbyOffers`,
};

export const changeCity = createAction(ActionType.CHANGE_CITY);
export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE);
export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION);
export const loadOffers = createAction(ActionType.LOAD_OFFERS);
export const setAuthInfo = createAction(ActionType.SET_AUTH_INFO);
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE);
export const loadReviews = createAction(ActionType.LOAD_REVIEWS);
export const loadOfferById = createAction(ActionType.LOAD_OFFER_BY_ID);
export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS);
export const resetAuthInfo = createAction(ActionType.RESET_AUTH_INFO);
export const updateOffers = createAction(ActionType.UPDATE_OFFERS);
export const updateOffer = createAction(ActionType.UPDATE_OFFER);
export const updateNearbyOffers = createAction(ActionType.UPDATE_NEARBY_OFFERS);
