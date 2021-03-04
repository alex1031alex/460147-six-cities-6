import {ActionType} from './action.js';
import {Cities} from '../const.js';
import {offers} from '../mocks/offers';

const initialState = {
  activeCity: Cities.PARIS,
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        activeCity: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export {reducer};
