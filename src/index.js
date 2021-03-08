import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {createAPI} from './services/api.js';
import {reducer} from './store/reducer.js';
import {AuthorizationStatus} from './const.js';
import App from './components/app/app.jsx';
import { ActionCreator } from './store/action.js';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={[]}
        reviews={{}}
      />
    </Provider>,
    document.querySelector(`#root`)
);
