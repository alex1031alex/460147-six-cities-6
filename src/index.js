import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {Router as BrowserRouter} from 'react-router-dom';

import {createAPI} from './services/api';
import rootReducer from './store/root-reducer';
import {AuthStatus} from './const';
import {requireAuthorization} from './store/action';
import {redirect} from './store/middlewares/redirect';
import {checkAuth} from './store/api-actions';
import browserHistory from './browser-history';

import App from './components/app/app';

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)
});

store.dispatch(checkAuth())
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <App />
          </BrowserRouter>
        </Provider>,
        document.querySelector(`#root`)
    );
  });
