import {offers} from './offers';
import {
  changeSortType,
  loadNearbyOffers,
  loadOfferById,
  loadOffers,
  loadReviews,
  updateOffers,
  updateOffer,
  updateNearbyOffers,
  resetFavoriteStatus
} from './../action';

import {SortType} from '../../const';

describe(`Reducers work correctly`, () => {
  it(`Reducer should reset authorization info to initial value`, () => {
    expect(offers(undefined, {}))
      .toEqual({
        activeSortType: SortType.POPULAR,
        offers: [],
        offer: null,
        reviews: [],
        nearbyOffers: [],
        isOffersLoaded: false,
      });
  });

  it(`Reducer should change current sort type`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: null,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
    };

    expect(offers(state, changeSortType(`test`)))
      .toEqual({
        activeSortType: `test`,
        offers: [],
        offer: null,
        reviews: [],
        nearbyOffers: [],
        isOffersLoaded: false,
      });
  });

  it(`Reducer should load nearby offers`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: null,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
    };

    const testOffers = [`offer1`, `offer2`, `offer3`];

    expect(offers(state, loadNearbyOffers(testOffers)))
      .toEqual({
        activeSortType: SortType.POPULAR,
        offers: [],
        offer: null,
        reviews: [],
        nearbyOffers: [`offer1`, `offer2`, `offer3`],
        isOffersLoaded: false,
      });
  });

  it(`Reducer should load offer`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: null,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
    };

    expect(offers(state, loadOfferById(`test`)))
      .toEqual({
        activeSortType: SortType.POPULAR,
        offers: [],
        offer: `test`,
        reviews: [],
        nearbyOffers: [],
        isOffersLoaded: false,
      });
  });

  it(`Reducer should load offers`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: null,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
    };

    const testOffers = [`offer1`, `offer2`, `offer3`];

    expect(offers(state, loadOffers(testOffers)))
      .toEqual({
        activeSortType: SortType.POPULAR,
        offers: [`offer1`, `offer2`, `offer3`],
        offer: null,
        reviews: [],
        nearbyOffers: [],
        isOffersLoaded: true,
      });
  });

  it(`Reducer should load reviews`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: null,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
    };

    const testReviews = [`review1`, `review2`, `review3`];

    expect(offers(state, loadReviews(testReviews)))
      .toEqual({
        activeSortType: SortType.POPULAR,
        offers: [],
        offer: null,
        reviews: [`review1`, `review2`, `review3`],
        nearbyOffers: [],
        isOffersLoaded: false,
      });
  });

  it(`Reducer should update offers correctly`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}],
      offer: null,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
    };

    expect(offers(state, updateOffers({id: 2, isFavorite: true})))
      .toEqual({
        activeSortType: SortType.POPULAR,
        offers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: true}],
        offer: null,
        reviews: [],
        nearbyOffers: [],
        isOffersLoaded: false,
      });
  });

  it(`Reducer should update current offer correctly`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: {id: 2, isFavorite: false},
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
    };

    expect(offers(state, updateOffer({id: 2, isFavorite: true})))
      .toEqual({
        activeSortType: SortType.POPULAR,
        offers: [],
        offer: {id: 2, isFavorite: true},
        reviews: [],
        nearbyOffers: [],
        isOffersLoaded: false,
      });
  });

  it(`If current offer has null value, reducer should not update it`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: null,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
    };

    expect(offers(state, updateOffer({id: 2, isFavorite: true})))
    .toEqual({
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: null,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
    });
  });

  it(`If current offer and payload don't have the same ids, reducer should not update current offer`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: {id: 2, isFavorite: false},
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
    };

    expect(offers(state, updateOffer({id: 1, isFavorite: true})))
      .toEqual({
        activeSortType: SortType.POPULAR,
        offers: [],
        offer: {id: 2, isFavorite: false},
        reviews: [],
        nearbyOffers: [],
        isOffersLoaded: false,
      });
  });

  it(`Reducer should update nearby offers correctly`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: null,
      reviews: [],
      nearbyOffers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}],
      isOffersLoaded: false,
    };

    expect(offers(state, updateNearbyOffers({id: 1, isFavorite: true})))
      .toEqual({
        activeSortType: SortType.POPULAR,
        offers: [],
        offer: null,
        reviews: [],
        nearbyOffers: [{id: 1, isFavorite: true}, {id: 2, isFavorite: false}],
        isOffersLoaded: false,
      });
  });

  it(`If nearby offers doesn't include an offer with id like in payload, reducer should not update nearby offers`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: null,
      reviews: [],
      nearbyOffers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}],
      isOffersLoaded: false,
    };

    expect(offers(state, updateNearbyOffers({id: 3, isFavorite: true})))
    .toEqual({
      activeSortType: SortType.POPULAR,
      offers: [],
      offer: null,
      reviews: [],
      nearbyOffers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}],
      isOffersLoaded: false,
    });
  });

  it(`Reducer should reset favorite status of all offers to false value`, () => {
    const state = {
      activeSortType: SortType.POPULAR,
      offers: [
        {id: 1, isFavorite: true},
        {id: 2, isFavorite: false},
        {id: 3, isFavorite: true}
      ],
      offer: null,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
    };

    expect(offers(state, resetFavoriteStatus()))
      .toEqual({
        activeSortType: SortType.POPULAR,
        offers: [
          {id: 1, isFavorite: false},
          {id: 2, isFavorite: false},
          {id: 3, isFavorite: false}
        ],
        offer: null,
        reviews: [],
        nearbyOffers: [],
        isOffersLoaded: false,
      });
  });
});
