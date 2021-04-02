import {
  changeCity,
  changeSortType,
  requireAuthorization,
  loadOffers,
  setAuthInfo,
  redirectToRoute,
  loadReviews,
  loadOfferById,
  loadNearbyOffers,
  resetAuthInfo,
  updateOffers,
  updateOffer,
  updateNearbyOffers,
  loadFavorites,
  resetFavoriteStatus,
  ActionType
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator changeCity returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: `test`,
    };

    expect(changeCity(`test`)).toEqual(expectedAction);
  });

  it(`Action creator changeSortType returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: `test`,
    };

    expect(changeSortType(`test`)).toEqual(expectedAction);
  });

  it(`Action creator requireAuthorization returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: `test`,
    };

    expect(requireAuthorization(`test`)).toEqual(expectedAction);
  });

  it(`Action creator loadOffers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: `test`,
    };

    expect(loadOffers(`test`)).toEqual(expectedAction);
  });

  it(`Action creator setAuthInfo returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_AUTH_INFO,
      payload: `test`,
    };

    expect(setAuthInfo(`test`)).toEqual(expectedAction);
  });

  it(`Action creator redirectToRoute returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `test`,
    };

    expect(redirectToRoute(`test`)).toEqual(expectedAction);
  });

  it(`Action creator loadReviews returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: `test`,
    };

    expect(loadReviews(`test`)).toEqual(expectedAction);
  });

  it(`Action creator loadOfferById returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER_BY_ID,
      payload: `test`,
    };

    expect(loadOfferById(`test`)).toEqual(expectedAction);
  });

  it(`Action creator loadNearbyOffers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: `test`,
    };

    expect(loadNearbyOffers(`test`)).toEqual(expectedAction);
  });

  it(`Action creator resetAuthInfo returns correct action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.RESET_AUTH_INFO,
    };

    expect(resetAuthInfo()).toEqual(expectedAction);
  });

  it(`Action creator updateOffers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFERS,
      payload: `test`,
    };

    expect(updateOffers(`test`)).toEqual(expectedAction);
  });

  it(`Action creator updateOffer returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: `test`,
    };

    expect(updateOffer(`test`)).toEqual(expectedAction);
  });

  it(`Action creator updateNearbyOffers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_NEARBY_OFFERS,
      payload: `test`,
    };

    expect(updateNearbyOffers(`test`)).toEqual(expectedAction);
  });

  it(`Action creator loadFavorites returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: `test`,
    };

    expect(loadFavorites(`test`)).toEqual(expectedAction);
  });

  it(`Action creator resetFavoriteStatus returns correct action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.RESET_FAVORITE_STATUS,
    };

    expect(resetFavoriteStatus()).toEqual(expectedAction);
  });
});
