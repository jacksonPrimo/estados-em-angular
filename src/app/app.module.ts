import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './store/counter/counter.reduce';
import { ScoreModule } from './store/score/score.module';
import { CounterComponent } from './view/counter/counter.component';
import { ScoreBoardComponent } from './view/score-board/score-board.component';
import { TestingLazyLoadingComponent } from './view/testing-lazy-loading/testing-lazy-loading.component';
import { UsersComponent } from './view/users/users.component';
// import { scoreReducer } from './store/score/score.reducer'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TestingLazyLoadingComponent,
    ScoreBoardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot({
      count: counterReducer,
      // score: scoreReducer
    }),
    ScoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
