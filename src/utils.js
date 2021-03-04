export const getOffersByCity = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};
