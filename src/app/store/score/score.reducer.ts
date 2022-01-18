import { createReducer, on, Action } from '@ngrx/store'
import * as ScoreActions from './score.actions'

export interface State {
  home: number;
  aways: number;
}

export const initialState: State = {
  home: 0,
  aways: 0
}

const _scoreReducer = createReducer(
  initialState,
  on(ScoreActions.homeScore, state=>({...state, home: state.home + 1})),
  on(ScoreActions.awayScore, state=>({...state, aways: state.aways + 1})),
  on(ScoreActions.resetScore, state=>({ home: 0, aways: 0})),
  on(ScoreActions.setScore, (state, { game })=>({home: game.home, aways: game.aways})),
)
export const scoreboardFeatureKey = 'score';
export function scoreReducer(state: State | undefined, action: Action){
  return _scoreReducer(state, action)
}