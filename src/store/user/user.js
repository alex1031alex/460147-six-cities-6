import {ActionType} from './../action';
import {AuthorizationStatus} from '../../const.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload
      };
    }

    case ActionType.SET_AUTH_INFO: {
      return {
        ...state,
        authInfo: action.payload
      };
    }
  }

  return state;
};

export {user};
