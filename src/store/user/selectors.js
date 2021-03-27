import {NameSpace} from '../root-reducer';

export const getAuthStatus = (state) => state[NameSpace.USER].authStatus;
export const getAuthInfo = (state) => state[NameSpace.USER].authInfo;
