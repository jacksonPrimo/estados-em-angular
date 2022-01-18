import { createAction, props } from "@ngrx/store";
import firebase from 'firebase/app'

export const login = createAction('[login Page] login', props<{user: firebase.User}>())
export const logout = createAction('[logout Page] Away Score');


import { Action } from '@ngrx/store';

export enum ActionTypes {
  LOGIN = '[login.component] LOGIN',
  LOGOUT = '[logout.component] LOGOUT'
}

export class loginAction implements Action {
  public readonly type = ActionTypes.LOGIN;
  constructor(public payload: string) { }
}

export class logoutAction implements Action {
  public readonly type = ActionTypes.LOGOUT;
}

export type Actions = loginAction | logoutAction;