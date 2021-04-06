import React from 'react';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {NameSpace} from '../../store/root-reducer';
import {SortType} from '../../const';

import Sorting from './sorting';

const mockStore = configureStore({});

it(`Sorting should render correctly`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  const history = createMemoryHistory();
  const store = mockStore({
    [NameSpace.OFFERS]: {
      activeSortType: SortType.POPULAR,
    }
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <Sorting />
        </Router>
      </Provider>
  );

  expect(screen.getByTestId(`sorting-form`)).toBeInTheDocument();
});
