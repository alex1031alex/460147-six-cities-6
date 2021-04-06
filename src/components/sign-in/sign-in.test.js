import React from 'react';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {NameSpace} from '../../store/root-reducer';
import {AuthStatus} from '../../const';

import SignIn from './sign-in';

const mockStore = configureStore({});

it(`Sorting should render correctly`, () => {
  jest.spyOn(redux, `useDispatch`);

  const history = createMemoryHistory();
  const store = mockStore({
    [NameSpace.USER]: {
      authStatus: AuthStatus.NO_AUTH,
    }
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <SignIn />
        </Router>
      </Provider>
  );

  expect(screen.getByTestId(`email`)).toBeInTheDocument();
  expect(screen.getByTestId(`password`)).toBeInTheDocument();
});
