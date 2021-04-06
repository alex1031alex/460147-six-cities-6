import React from 'react';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {NameSpace} from '../../store/root-reducer';
import {Cities} from '../../const';

import CitiesList from './cities-list';

const mockStore = configureStore({});

it(`Cities list should render correctly`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  const history = createMemoryHistory();
  const store = mockStore({
    [NameSpace.CITY]: {
      activeCity: Cities.PARIS,
    }
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesList />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/paris/i)).toBeInTheDocument();
  expect(screen.getByText(/hamburg/i)).toBeInTheDocument();
});
