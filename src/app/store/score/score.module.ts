import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as scoreImport from './score.reducer'

@NgModule({
  imports: [
    StoreModule.forFeature(scoreImport.scoreboardFeatureKey, scoreImport.scoreReducer)
  ]
})
export class ScoreModule { }
