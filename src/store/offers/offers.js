import {createReducer} from '@reduxjs/toolkit';

import {
  changeSortType,
  loadNearbyOffers,
  loadOfferById,
  loadOffers,
  loadReviews,
  updateOffers,
  updateOffer,
  updateNearbyOffers,
} from './../action';

import {SortType} from '../../const';

const initialState = {
  activeSortType: SortType.POPULAR,
  offers: [],
  offer: null,
  reviews: [],
  nearbyOffers: [],
  isOffersLoaded: false,
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
  builder.addCase(updateOffers, (state, action) => {
    state.offers = state.offers.map((offer) => {
      if (offer.id === action.payload.id) {
        return action.payload;
      }

      return offer;
    });
  });
  builder.addCase(updateOffer, (state, action) => {
    if (state.offer && state.offer.id === action.payload.id) {
      state.offer = action.payload;
    }
  });
  builder.addCase(updateNearbyOffers, (state, action) => {
    state.nearbyOffers.forEach((item, index) => {
      if (item.id === action.payload.id) {
        state.nearbyOffers[index] = action.payload;
      }
    });
  });
});

export {offers};
