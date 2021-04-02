import {createReducer} from '@reduxjs/toolkit';

import {loadFavorites} from './../action';

const initialState = {
  favorites: [],
  isOffersLoaded: false,
};

const favorites = createReducer(initialState, (builder) => {
  builder.addCase(loadFavorites, (state, action) => {
    state.favorites = action.payload;
    state.isOffersLoaded = true;
  });
});

export {favorites};
