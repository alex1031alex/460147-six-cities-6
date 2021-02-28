import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './store/reducer.js';
import App from './components/app/app.jsx';
import {offers} from './mocks/offers.js';
import {reviews} from './mocks/reviews.js';

const OFFERS_COUNT = 5;

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        offersCount={OFFERS_COUNT}
        offers={offers}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
