import * as types from '../types';
import createReducer from './createReducer';

export const userReducer = createReducer({}, {
  [types.SET_USER_LOCALLY](state, action){
    return state = action.payload;
  }
})
