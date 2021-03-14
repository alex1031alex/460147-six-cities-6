import {ActionCreator} from './action.js';
import {adaptOffersData, adaptAuthInfo} from '../services/adapter.js';
import {AuthorizationStatus} from '../const.js';

export const fetchOffers = () => (dispatch, _getState, api) => {
  api.get(`/hotels`)
    .then(({data}) => adaptOffersData(data))
    .then((data) => dispatch(ActionCreator.loadOffers(data)));
};

export const checkAuth = () => (dispath, _getState, api) => (
  api.get(`/login`)
    .then(() => dispath(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      return data;
    })
    .then((data) => adaptAuthInfo(data))
    .then((data) => dispatch(ActionCreator.setAuthInfo(data)))
);
