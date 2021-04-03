import MockAdapter from 'axios-mock-adapter';

import {user} from './user';
import {ActionType, requireAuthorization, resetAuthInfo, setAuthInfo} from './../action';
import {ApiRoute, AuthStatus, AppRoute} from '../../const';
import {checkAuth, login, logout} from '../api-actions';
import {adaptAuthInfo} from '../../services/adapters';
import {createAPI} from '../../services/api';

const api = createAPI(() => {});

const rawAuthInfo = {
  [`avatar_url`]: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
  email: `alex123@yahoo.com`,
  id: 5,
  [`is_pro`]: true,
  name: `Alex`
};

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

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to ApiRoute.LOGIN`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecker = checkAuth();

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, rawAuthInfo);

    return authChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_INFO,
          payload: adaptAuthInfo(rawAuthInfo),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to ApiRoute.LOGIN with POST method`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginDispatcher = login({email: `alex123@yahoo.com`, password: `abc123`});

    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(200, rawAuthInfo);

    return loginDispatcher(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_AUTH_INFO,
          payload: adaptAuthInfo(rawAuthInfo),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });

  it(`Should make a correct API call to ApiRoute.LOGOUT`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutDispatcher = logout();

    apiMock
      .onGet(ApiRoute.LOGOUT)
      .reply(200);

    return logoutDispatcher(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthStatus.NO_AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.RESET_AUTH_INFO,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.RESET_FAVORITE_STATUS,
        });
      });
  });
});
