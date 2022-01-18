import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingLazyLoadingComponent } from './testing-lazy-loading.component';

const routes: Routes = [
  {path: 'lazyLoading', component: TestingLazyLoadingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingLazyLoadingRoutingModule { }
