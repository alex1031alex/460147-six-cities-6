import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setAuthInfo} from './../action';
import {AuthStatus} from '../../const.js';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  authInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authStatus = action.payload;
  });
  builder.addCase(setAuthInfo, (state, action) => {
    state.authInfo = action.payload;
  });
});

export {user};
