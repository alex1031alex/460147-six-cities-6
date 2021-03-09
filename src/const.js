export const Cities = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const CardType = {
  CITY: `cities`,
  FAVORITE: `favorites`,
  NEARBY: `nearby`,
};

export const ImageSize = {
  STANDARD: {
    width: 260,
    height: 200
  },
  SMALL: {
    width: 150,
    height: 100
  }
};

export const SortType = {
  POPULAR: `Popular`,
  PRICE_INC: `Price: low to high`,
  PRICE_DEC: `Price: high to low`,
  RATING: `Top rated first`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const Coords = {
  [Cities.PARIS]: {
    latitude: 48.85661,
    longitude: 2.351499,
  },
  [Cities.COLOGNE]: {
    latitude: 50.938361,
    longitude: 6.959974,
  },
  [Cities.BRUSSELS]: {
    latitude: 50.846557,
    longitude: 4.351697,
  },
  [Cities.AMSTERDAM]: {
    latitude: 52.37454,
    longitude: 4.897976,
  },
  [Cities.HAMBURG]: {
    latitude: 53.550341,
    longitude: 10.000654,
  },
  [Cities.DUSSELDORF]: {
    latitude: 51.225402,
    longitude: 6.776314,
  }
};
