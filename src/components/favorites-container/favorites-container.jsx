import React from 'react';
import {useSelector} from 'react-redux';

import {getFavoriteOffers} from '../../store/offers/selectors';

import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

const FavoritesContainer = () => {
  const favoriteOffers = useSelector(getFavoriteOffers);
  const isFavorites = !!favoriteOffers.length;

  return (
    <React.Fragment>
      {isFavorites ? <Favorites /> : <FavoritesEmpty />}
    </React.Fragment>
  );
};

export default FavoritesContainer;
