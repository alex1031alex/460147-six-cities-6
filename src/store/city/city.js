import {ActionType} from './../action';
import {Cities} from '../../const';

const initialState = {
  activeCity: Cities.PARIS,
};

const city = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        activeCity: action.payload,
      };
    }
  }

  return state;
};

export {city};
