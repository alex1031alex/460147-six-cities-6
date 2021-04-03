import {
  loadOffers,
  requireAuthorization,
  setAuthInfo,
  redirectToRoute,
  loadOfferById,
  loadReviews,
  loadNearbyOffers,
  resetAuthInfo,
  updateOffers,
  updateOffer,
  updateNearbyOffers,
  loadFavorites,
  resetFavoriteStatus
} from './action.js';

import {
  adaptOfferData,
  adaptOffersData,
  adaptAuthInfo,
  adaptReviews
} from '../services/adapters.js';

import {AuthStatus, ApiRoute, AppRoute} from '../const.js';

export const fetchOffers = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.OFFERS)
    .then(({data}) => adaptOffersData(data))
    .then((data) => dispatch(loadOffers(data)));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => adaptAuthInfo(data))
    .then((data) => dispatch(setAuthInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthStatus.AUTH));
      return data;
    })
    .then((data) => adaptAuthInfo(data))
    .then((data) => dispatch(setAuthInfo(data)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const fetchOfferById = (id) => (dispatch, _getState, api) => {
  return api.get(`/hotels/${id}`)
    .then(({data}) => adaptOfferData(data))
    .then((data) => dispatch(loadOfferById(data)))
    .catch(() => dispatch(redirectToRoute(ApiRoute.NOT_FOUND_PAGE)));
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  return api.get(`/comments/${id}`)
    .then(({data}) => adaptReviews(data))
    .then((data) => dispatch(loadReviews(data)))
    .catch(() => {});
};

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => {
  return api.get(`/hotels/${id}/nearby`)
    .then(({data}) => adaptOffersData(data))
    .then((data) => dispatch(loadNearbyOffers(data)))
    .catch(() => {});
};

export const sendReview = ({id, review}) => (dispatch, _getState, api) => {
  return api.post(`/comments/${id}`, review)
    .then(({data}) => adaptReviews(data))
    .then((data) => dispatch(loadReviews(data)));
};

export const logout = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.LOGOUT)
    .then(() => {
      dispatch(requireAuthorization(AuthStatus.NO_AUTH));
      dispatch(resetAuthInfo());
      dispatch(resetFavoriteStatus());
    });
};

export const fetchFavorites = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.FAVORITES)
    .then(({data}) => adaptOffersData(data))
    .then((data) => dispatch(loadFavorites(data)))
    .catch(() => {});
};

export const changeFavoriteStatus = (id, status) => (dispatch, _getState, api) => {
  return api.post(`/favorite/${id}/${status}`)
    .then(({data}) => adaptOfferData(data))
    .then((data) => {
      dispatch(updateOffers(data));
      dispatch(updateOffer(data));
      dispatch(updateNearbyOffers(data));
      dispatch(fetchFavorites());
    });
};
