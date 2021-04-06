import React from 'react';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {NameSpace} from '../../store/root-reducer';
import {AuthStatus} from '../../const';

import Header from './header';

const mockStore = configureStore({});

describe(`Header should render correctly`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Header with unauthorized user`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthStatus.NO_AUTH,
        authInfo: {}
      }
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Header />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/sign\sin/i)).toBeInTheDocument();
  });

  it(`Header with authorized user`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthStatus.AUTH,
        authInfo: {
          name: `Username`,
          email: `testmail@yahoo.com`
        }
      }
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Header />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/logout/i)).toBeInTheDocument();
    expect(screen.getByText(/testmail@yahoo\.com/i)).toBeInTheDocument();
  });
});
