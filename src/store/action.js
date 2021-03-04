export const ActionType = {
  CHANGE_CITY: `city/change`
};

export const ActionCreator = {
  changeCity(city) {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city
    };
  },
};
