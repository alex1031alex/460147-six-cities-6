import MockAdapter from 'axios-mock-adapter';

import {favorites} from './favorites';
import {ActionType, loadFavorites} from '../action';
import {createAPI} from '../../services/api';
import {fetchFavorites} from '../api-actions';
import {ApiRoute} from '../../const';
import {adaptOffersData} from '../../services/adapters';

const api = createAPI(() => {});
export const rawFavoriteOffers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      },
      name: `Paris`
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    goods: [`Breakfast`, `Air conditioning`, `Laptop friendly workspace`, `Washer`],
    host: {
      [`avatar_url`]: `img/avatar-angelina.jpg`,
      id: 25,
      [`is_pro`]: true,
      name: `Angelina`,
    },
    id: 1,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
    ],
    [`is_favorite`]: true,
    [`is_premium`]: true,
    location: {
      latitude: 48.83861,
      longitude: 2.350499,
      zoom: 13,
    },
    [`max_adults`]: 1,
    [`preview_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    price: 169,
    rating: 3,
    title: `The house among olive`,
    type: `room`
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      },
      name: `Hamburg`
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    goods: [`Air conditioning`, `Washer`, `Breakfast`, `Laptop friendly workspace`],
    host: {
      [`avatar_url`]: `img/avatar-angelina.jpg`,
      id: 25,
      [`is_pro`]: true,
      name: `Angelina`,
    },
    id: 89,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    ],
    [`is_favorite`]: true,
    [`is_premium`]: false,
    location: {
      latitude: 53.540341,
      longitude: 10.025654,
      zoom: 13,
    },
    [`max_adults`]: 8,
    [`preview_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    price: 480,
    rating: 2.3,
    title: `Loft Studio in the Central Area`,
    type: `apartment`
  }
];

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(favorites(undefined, {}))
      .toEqual({
        favorites: [],
        isOffersLoaded: false,
      });
  });

  it(`Reducer should load favorite offers`, () => {
    const state = {
      favorites: [],
      isOffersLoaded: false,
    };

    const testOffers = [`offer1`, `offer2`, `offer3`];

    expect(favorites(state, loadFavorites(testOffers)))
      .toEqual({
        favorites: [`offer1`, `offer2`, `offer3`],
        isOffersLoaded: true,
      });
  });
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to ApiRoute.FAVORITES`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = fetchFavorites();

    apiMock
      .onGet(ApiRoute.FAVORITES)
      .reply(200, rawFavoriteOffers);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: adaptOffersData(rawFavoriteOffers),
        });
      });
  });
});
