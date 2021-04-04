import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FavoritesEmpty from './favorites-empty';

it(`FavoritesEmpty component should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <FavoritesEmpty />
      </Router>
  );

  const favoriteStatusTextElement = getByText(`Nothing yet saved.`);
  const descriptionTextElement = getByText(`Save properties to narrow down search or plan your future trips.`);

  expect(favoriteStatusTextElement).toBeInTheDocument();
  expect(descriptionTextElement).toBeInTheDocument();
});
