export const ActionType = {
  CHANGE_CITY: `city/change`,
  SET_OFFERS_BY_CITY: `city/setOffers`
};

export const ActionCreator = {
  changeCity(city) {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city
    };
  },

  setOffersByCity() {
    return {
      type: ActionType.SET_OFFERS_BY_CITY
    };
  }
};
