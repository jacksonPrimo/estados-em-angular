import { createReducer, on, Action, State } from '@ngrx/store'
import {ActionTypes, Actions} from './user.action'
import firebase from 'firebase/app'
import { initialState } from './state'

const {
  LOGIN,
  LOGOUT
} = ActionTypes;

export function userReducer(state: State = initialState, action: Actions){
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        podcast
      }
  }
}