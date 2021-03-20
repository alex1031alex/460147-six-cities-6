import {ActionCreator} from './action.js';
import {adaptOfferData, adaptOffersData, adaptAuthInfo, adaptReviews} from '../services/adapters.js';
import {AuthorizationStatus, ApiRoute, AppRoute} from '../const.js';

export const fetchOffers = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.OFFERS)
    .then(({data}) => adaptOffersData(data))
    .then((data) => dispatch(ActionCreator.loadOffers(data)));
};

export const checkAuth = () => (dispath, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(() => dispath(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      return data;
    })
    .then((data) => adaptAuthInfo(data))
    .then((data) => dispatch(ActionCreator.setAuthInfo(data)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export const fetchOfferById = (id) => (dispatch, _getState, api) => {
  return api.get(`/hotels/${id}`)
    .then(({data}) => adaptOfferData(data))
    .then((data) => dispatch(ActionCreator.loadOfferById(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(ApiRoute.NOT_FOUND_PAGE)));
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  return api.get(`/comments/${id}`)
    .then(({data}) => adaptReviews(data))
    .then((data) => dispatch(ActionCreator.loadReviews(data)))
    .catch(() => {});
};
