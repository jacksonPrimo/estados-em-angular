import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './view/counter/counter.component';
import { ScoreBoardComponent } from './view/score-board/score-board.component';
import { UsersComponent } from './view/users/users.component';

const routes: Routes = [
  {path: 'tests', loadChildren: () => import('./view/testing-lazy-loading/testing-lazy-loading.module').then(m=>m.TestingLazyLoadingModule)},
  {path: 'counter', component: CounterComponent},
  {path: 'score-board', component: ScoreBoardComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
