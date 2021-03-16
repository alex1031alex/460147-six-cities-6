import {ActionCreator} from './action.js';
import {adaptOffersData, adaptAuthInfo} from '../services/adapters.js';
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
