import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Warning from './warning';

it(`Warning should render correctly`, () => {
  const history = createMemoryHistory();
  const description = `Test error description`;

  render(
      <Router history={history}>
        <Warning description={description} />
      </Router>
  );

  expect(screen.getByText(/An error occured!/i)).toBeInTheDocument();
  expect(screen.getByText(description)).toBeInTheDocument();
});
