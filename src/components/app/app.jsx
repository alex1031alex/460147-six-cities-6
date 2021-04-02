import React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';

import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import FavoritesContainer from '../favorites-container/favorites-container';
import Room from '../room/room';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

const App = () => (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <Main />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <SignIn />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        render={() => <FavoritesContainer />}
      />
      <Route exact path={AppRoute.OFFER}>
        <Room />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
