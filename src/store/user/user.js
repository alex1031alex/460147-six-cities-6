import {ActionType} from './../action';
import {AuthStatus} from '../../const.js';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  authInfo: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION: {
      return {
        ...state,
        authStatus: action.payload
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
