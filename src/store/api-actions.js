import {ActionCreator} from './action.js';

export const fetchOffers = (dispatch, _getState, api) => {
  api.get(`/offers`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)));
};
