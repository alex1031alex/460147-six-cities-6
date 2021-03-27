import {ActionType} from './../action';
import {SortType} from '../../const';

const initialState = {
  activeSortType: SortType.POPULAR,
  offers: [],
  offer: null,
  reviews: [],
  nearbyOffers: [],
  isOffersDataLoaded: false,
};

const offers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT_TYPE: {
      return {
        ...state,
        activeSortType: action.payload,
      };
    }

    case ActionType.LOAD_OFFERS: {
      return {
        ...state,
        offers: action.payload,
        isOffersDataLoaded: true,
      };
    }

    case ActionType.LOAD_OFFER_BY_ID: {
      return {
        ...state,
        offer: action.payload
      };
    }

    case ActionType.LOAD_REVIEWS: {
      return {
        ...state,
        reviews: action.payload
      };
    }

    case ActionType.LOAD_NEARBY_OFFERS: {
      return {
        ...state,
        nearbyOffers: action.payload
      };
    }
  }

  return state;
};

export {offers};
