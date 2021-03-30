import {createReducer} from '@reduxjs/toolkit';

import {
  changeSortType,
  loadNearbyOffers,
  loadOfferById,
  loadOffers,
  loadReviews
} from './../action';

import {SortType} from '../../const';

const initialState = {
  activeSortType: SortType.POPULAR,
  offers: [],
  offer: null,
  reviews: [],
  nearbyOffers: [],
  isOffersLoaded: false,
  favoriteOffers: [],
};

const offers = createReducer(initialState, (builder) => {
  builder.addCase(changeSortType, (state, action) => {
    state.activeSortType = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });
  builder.addCase(loadOfferById, (state, action) => {
    state.offer = action.payload;
  });
  builder.addCase(loadReviews, (state, action) => {
    state.reviews = action.payload;
  });
  builder.addCase(loadNearbyOffers, (state, action) => {
    state.nearbyOffers = action.payload;
  });
});

export {offers};
