import * as types from '../types';

export function signInUser(request){
  console.log('Signed In User', request)
  return {
    type: types.SET_USER_LOCALLY,
    payload: request
  }
}
