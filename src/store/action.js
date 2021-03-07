export const ActionType = {
  CHANGE_CITY: `city/change`,
  CHANGE_SORT_TYPE: `offers/changeSortType`
};

export const ActionCreator = {
  changeCity(city) {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city
    };
  },

  changeSortType(sortType) {
    return {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: sortType
    };
  }
};
