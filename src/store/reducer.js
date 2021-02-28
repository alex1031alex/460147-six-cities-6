import {ActionType} from './action.js';
import {Cities} from '../const.js';
import {offers} from '../mocks/offers';
import {getOffersByCity} from '../utils.js';

const initialState = {
  activeCity: Cities.PARIS,
  offers,
  offersByCity: getOffersByCity(offers, Cities.PARIS)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        activeCity: action.payload
      };
    }

    case ActionType.SET_OFFERS_BY_CITY: {
      return {
        ...state,
        offersByCity: getOffersByCity(state.offers, state.activeCity)
      };
    }

    default: {
      return state;
    }
  }
};

export {reducer};
