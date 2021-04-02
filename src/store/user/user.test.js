import {user} from './user';
import {requireAuthorization, resetAuthInfo, setAuthInfo} from './../action';
import {AuthStatus} from '../../const';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(user(undefined, {})).toEqual({
      authStatus: AuthStatus.NO_AUTH,
      authInfo: {},
    });
  });

  it(`Reducer should require authorization and set authStatus`, () => {
    const state = {
      authStatus: AuthStatus.NO_AUTH,
      authInfo: {},
    };

    expect(user(state, requireAuthorization(`test`)))
      .toEqual({
        authStatus: `test`,
        authInfo: {},
      });
  });

  it(`Reducer should set authorization info`, () => {
    const state = {
      authStatus: AuthStatus.NO_AUTH,
      authInfo: {},
    };

    expect(user(state, setAuthInfo(`test`)))
      .toEqual({
        authStatus: AuthStatus.NO_AUTH,
        authInfo: `test`,
      });
  });

  it(`Reducer should reset authorization info to initial value`, () => {
    const state = {
      authStatus: AuthStatus.NO_AUTH,
      authInfo: {
        avatarUrl: `test`,
        email: `test`,
      },
    };

    expect(user(state, resetAuthInfo()))
      .toEqual({
        authStatus: AuthStatus.NO_AUTH,
        authInfo: {},
      });
  });
});
