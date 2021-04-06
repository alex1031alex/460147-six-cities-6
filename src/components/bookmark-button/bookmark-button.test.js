import React from 'react';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {NameSpace} from '../../store/root-reducer';
import {AuthStatus} from '../../const';

import BookmarkButton from './bookmark-button';

const mockStore = configureStore({});

it(`Bookmark button should render correctly`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  const history = createMemoryHistory();
  const store = mockStore({
    [NameSpace.USER]: {
      authStatus: AuthStatus.AUTH,
    }
  });
  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <BookmarkButton
            isFavorite={true}
            parentClassName="place-card__bookmark-button"
            id={5}
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
          </BookmarkButton>
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
