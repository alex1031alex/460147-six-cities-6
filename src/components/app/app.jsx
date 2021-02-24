import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFoundPage from '../not-found-page/not-found-page';

const NEARBY_OFFERS_COUNT = 3;

const App = (props) => {
  const {offersCount, offers, reviews} = props;
  const favoriteOffers = offers
    .filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            offersCount={offersCount}
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={favoriteOffers} />
        </Route>
        <Route exact path="/offer/:id"
          render={({match}) => {
            const {id} = match.params;
            const offer = offers.find((item) => item.id === +id);
            const nearbyOffers = offers
            .filter((item) => item.id !== +id)
            .slice(0, NEARBY_OFFERS_COUNT);

            return <Room
              offer={offer}
              reviews={reviews[id]}
              nearbyOffers={nearbyOffers}
            />;
          }}>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.shape({}),
};

export default App;
