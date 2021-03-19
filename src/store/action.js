export const ActionType = {
  CHANGE_CITY: `city/change`,
  CHANGE_SORT_TYPE: `offers/changeSortType`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  LOAD_OFFERS: `offers/loadOffers`,
  SET_AUTH_INFO: `user/setAuthInfo`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`,
  LOAD_REVIEWS: `offers/loadReviews`,
  LOAD_OFFER_BY_ID: `offers/loadOfferById`,
};

export const ActionCreator = {
  changeCity(city) {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };
  },

  changeSortType(sortType) {
    return {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: sortType,
    };
  },

  requireAuthorization(status) {
    return {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status,
    };
  },

  loadOffers(offers) {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },

  setAuthInfo(authInfo) {
    return {
      type: ActionType.SET_AUTH_INFO,
      payload: authInfo,
    };
  },

  redirectToRoute(url) {
    return {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };
  },

  loadReviews(reviews) {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },

  loadOfferById(offer) {
    return {
      type: ActionType.LOAD_OFFER_BY_ID,
      payload: offer,
    };
  },
};
