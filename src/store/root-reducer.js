import {combineReducers} from 'redux';
import {city} from './city/city';
import {offers} from './offers/offers';
import {user} from './user/user';

export const NameSpace = {
  CITY: `CITY`,
  OFFERS: `OFFERS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.CITY]: city,
  [NameSpace.OFFERS]: offers,
  [NameSpace.USER]: user,
});
