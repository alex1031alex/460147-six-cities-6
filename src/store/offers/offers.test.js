import MockAdapter from 'axios-mock-adapter';

import {offers} from './offers';
import {rawOffers} from './test-mocks';
import {
  changeSortType,
  loadNearbyOffers,
  loadOfferById,
  loadOffers,
  loadReviews,
  updateOffers,
  updateOffer,
  updateNearbyOffers,
  resetFavoriteStatus,
  ActionType
} from './../action';

import {SortType, ApiRoute} from '../../const';
import {createAPI} from '../../services/api';
import {changeFavoriteStatus, fetchNearbyOffers, fetchOfferById, fetchOffers, fetchReviews, sendReview} from '../api-actions';
import {adaptOfferData, adaptOffersData, adaptReviews} from '../../services/adapters';

const ADD_FAVORITE_STATUS = 1;

const api = createAPI(() => {});

const rawReviews = [
  {
    comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
    date: `2021-03-10T08:04:28.646Z`,
    id: 1,
    rating: 2,
    user: {
      id: 12,
      [`avatar_url`]: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
      [`is_pro`]: true,
      name: `Isaac`
    }
  }
];

const newReview = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  rating: 4
};

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

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to ApiRoute.hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(ApiRoute.OFFERS)
      .reply(200, rawOffers);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: adaptOffersData(rawOffers),
        });
      });
  });

  it(`Should make a correct API call to ApiRoute.OFFER`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const offerLoader = fetchOfferById(id);

    apiMock
      .onGet(`/hotels/${id}`)
      .reply(200, rawOffers[0]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_BY_ID,
          payload: adaptOfferData(rawOffers[0]),
        });
      });
  });

  it(`Should make a correct API call to ApiRoute.REVIEWS`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const reviewsLoader = fetchReviews(id);

    apiMock
      .onGet(`/comments/${id}`)
      .reply(200, rawReviews);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: adaptReviews(rawReviews),
        });
      });
  });

  it(`Should make a correct API call to ApiRoute.OFFERS_NEARBY`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 2;
    const offersLoader = fetchNearbyOffers(id);

    apiMock
      .onGet(`/hotels/${id}/nearby`)
      .reply(200, rawOffers);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: adaptOffersData(rawOffers),
        });
      });
  });

  it(`Should make a correct API call to ApiRoute.REVIEWS with post method`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const reviewSender = sendReview({id, review: newReview});

    apiMock
      .onPost(`/comments/${id}`, newReview)
      .reply(200, rawReviews);

    return reviewSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: adaptReviews(rawReviews),
        });
      });
  });

  it(`Should make a correct API call to ApiRoute.FAVORITES with post method`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = ADD_FAVORITE_STATUS;
    const favoriteStatusToggle = changeFavoriteStatus(id, status);

    apiMock
      .onPost(`/favorite/${id}/${status}`)
      .reply(200, {...rawOffers[0], isFavorite: true});

    return favoriteStatusToggle(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFERS,
          payload: adaptOfferData({...rawOffers[0], isFavorite: true}),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_OFFER,
          payload: adaptOfferData({...rawOffers[0], isFavorite: true}),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.UPDATE_NEARBY_OFFERS,
          payload: adaptOfferData({...rawOffers[0], isFavorite: true}),
        });
      });
  });
});
