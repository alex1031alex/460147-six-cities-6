import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFoundPage from './not-found-page';

it(`NotFoundPage should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <NotFoundPage />
      </Router>
  );

  const headingElement = getByText(`404. Page not found`);
  const linkedElement = getByText(`Вернуться на главную`);

  expect(headingElement).toBeInTheDocument();
  expect(linkedElement).toBeInTheDocument();
});
