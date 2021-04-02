import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {getAuthStatus} from '../../store/user/selectors';
import {AppRoute, AuthStatus} from '../../const';
import {redirectToRoute} from '../../store/action';
import {changeFavoriteStatus} from '../../store/api-actions';

const BookmarkButton = (props) => {
  const {isFavorite, parentClassName, children, id} = props;
  const activeClassName = isFavorite ? `${parentClassName}--active` : ``;
  const authStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();

    if (authStatus !== AuthStatus.AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
      return;
    }

    const status = isFavorite ? 0 : 1;
    dispatch(changeFavoriteStatus(id, status));
  };

  return (
    <button
      type="button"
      className={`button ${parentClassName} ${activeClassName}`}
      onClick={handleClick}
    >
      {children}
      <span className="visually-hidden">${isFavorite ? `In` : `To`} bookmarks</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  isFavorite: PropTypes.bool,
  parentClassName: PropTypes.string,
  children: PropTypes.object,
  id: PropTypes.number,
};

export default BookmarkButton;
