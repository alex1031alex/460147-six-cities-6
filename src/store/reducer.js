import {ActionType} from './action.js';
import {AuthorizationStatus, Cities, SortType} from '../const.js';

const initialState = {
  activeCity: Cities.PARIS,
  activeSortType: SortType.POPULAR,
  offers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isOffersDataLoaded: false,
  authInfo: {},
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

    case ActionType.REQUIRE_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload
      };
    }

    case ActionType.LOAD_OFFERS: {
      return {
        ...state,
        offers: action.payload,
        isOffersDataLoaded: true,
      };
    }

    case ActionType.SET_AUTH_INFO: {
      return {
        ...state,
        authInfo: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export {reducer};
