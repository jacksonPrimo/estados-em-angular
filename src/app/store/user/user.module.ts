import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userboardFeatureKey, userReducer } from './user.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(userboardFeatureKey, userReducer)
  ]
})
export class UserModule { }
