import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {offers} from './mocks/offers.js';
import {reviews} from './mocks/reviews.js';

const OFFERS_COUNT = 5;

ReactDOM.render(
    <App
      offersCount={OFFERS_COUNT}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
