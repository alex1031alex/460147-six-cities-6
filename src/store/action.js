export const ActionType = {
  CHANGE_CITY: `city/change`,
  CHANGE_SORT_TYPE: `offers/changeSortType`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
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
};
