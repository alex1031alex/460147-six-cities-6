import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {createAPI} from './services/api';
import rootReducer from './store/root-reducer';
import {AuthStatus} from './const';
import {requireAuthorization} from './store/action';
import {redirect} from './store/middlewares/redirect';
import {checkAuth} from './store/api-actions';

import App from './components/app/app';

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth())
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App
            offers={[]}
          />
        </Provider>,
        document.querySelector(`#root`)
    );
  });
