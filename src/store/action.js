export const ActionType = {
  CHANGE_CITY: `city/change`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  SET_AUTH_INFO: `user/setAuthInfo`,
  CHANGE_SORT_TYPE: `offers/changeSortType`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_REVIEWS: `offers/loadReviews`,
  LOAD_OFFER_BY_ID: `offers/loadOfferById`,
  LOAD_NEARBY_OFFERS: `offers/loadNearbyOffers`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const changeSortType = (sortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: sortType,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const setAuthInfo = (authInfo) => ({
  type: ActionType.SET_AUTH_INFO,
  payload: authInfo,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const loadOfferById = (offer) => ({
  type: ActionType.LOAD_OFFER_BY_ID,
  payload: offer,
});

export const loadNearbyOffers = (nearbyOffers) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload: nearbyOffers,
});
