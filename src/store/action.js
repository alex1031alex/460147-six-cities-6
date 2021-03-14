export const ActionType = {
  CHANGE_CITY: `city/change`,
  CHANGE_SORT_TYPE: `offers/changeSortType`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  LOAD_OFFERS: `offers/loadOffers`,
  SET_AUTH_INFO: `user/setAuthInfo`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`,
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
      payload: url
    };
  }
};
