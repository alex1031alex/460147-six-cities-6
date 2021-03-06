import {ActionType} from './action.js';
import {Cities, SortType} from '../const.js';
import {offers} from '../mocks/offers';

const initialState = {
  activeCity: Cities.PARIS,
  activeSortType: SortType.POPULAR,
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

    case ActionType.CHANGE_SORT_TYPE: {
      return {
        ...state,
        activeSortType: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export {reducer};
