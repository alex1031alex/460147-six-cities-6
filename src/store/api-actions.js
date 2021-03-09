import {ActionCreator} from './action.js';
import {adaptOffersData} from '../services/adapter.js';

export const fetchOffers = () => (dispatch, _getState, api) => {
  api.get(`/hotels`)
    .then(({data}) => adaptOffersData(data))
    .then((data) => dispatch(ActionCreator.loadOffers(data)));
};
