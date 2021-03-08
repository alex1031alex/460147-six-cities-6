import {ActionCreator} from './action.js';

export const fetchOffers = () => (dispatch, _getState, api) => {
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)));
};
