import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getLoadedOffersStatus} from '../../store/favorites/selectors';

import Favorites from '../favorites/favorites';
import Spinner from '../spinner/spinner';
import {fetchFavorites} from '../../store/api-actions';

const FavoritesContainer = () => {
  const isOffersLoaded = useSelector(getLoadedOffersStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOffersLoaded) {
      dispatch(fetchFavorites());
    }
  }, [isOffersLoaded]);

  return (
    <React.Fragment>
      {isOffersLoaded ? <Favorites /> : <Spinner />}
    </React.Fragment>
  );
};

export default FavoritesContainer;
