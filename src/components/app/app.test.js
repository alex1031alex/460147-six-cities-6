import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthStatus, Cities} from '../../const';
import {NameSpace} from '../../store/root-reducer';
import {rawOffers} from '../../store/offers/test-mocks';
import {adaptOfferData} from '../../services/adapters';

import App from './app';

const mockStore = configureStore({});

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Main' when user navigates to '/' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.CITY]: {
        activeCity: Cities.PARIS
      },
      [NameSpace.OFFERS]: {
        offers: [],
        isOffersLoaded: true
      },
      [NameSpace.USER]: {
        authStatus: AuthStatus.NO_AUTH,
        authInfo: {}
      }
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it(`Render 'SignIn' when user navigates to '/login' url`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthStatus.NO_AUTH,
        authInfo: {}
      }
    });

    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByTestId(`email`)).toBeInTheDocument();
    expect(screen.getByTestId(`password`)).toBeInTheDocument();
  });

  it(`Render 'Favorites' when user navigates to '/favorites' url`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthStatus.AUTH,
        authInfo: {
          name: `test`,
          email: `testmail@yahoo.com`
        }
      },
      [NameSpace.FAVORITES]: {
        favorites: [],
        isOffersLoaded: true,
      }
    });

    const history = createMemoryHistory();
    history.push(`/favorites`);

    render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });

  it(`Render 'Room' when user navigates to '/offer/:id' url`, async () => {
    const store = mockStore({
      [NameSpace.OFFERS]: {
        offer: adaptOfferData(rawOffers[0]),
        reviews: [],
        nearbyOffers: []
      },
      [NameSpace.USER]: {
        authStatus: AuthStatus.AUTH,
        authInfo: {
          name: `test`,
          email: `testmail@yahoo.com`
        }
      },
    });

    const history = createMemoryHistory();
    history.push(`/offer/1`);

    store.dispatch = () => Promise.resolve();

    render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    await waitFor(() => expect(screen.getByText(/The house among olive/i)).toBeInTheDocument());
  });

  it(`Render NotFoundPage when user navigates to '/not-found-page' url`, () => {
    const history = createMemoryHistory();
    history.push(`/not-found-page`);

    render(
        <Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/404\. Page not found/i)).toBeInTheDocument();
  });
});
