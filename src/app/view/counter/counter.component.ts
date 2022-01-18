import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/store/counter/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  constructor(
    private store: Store<{count: number}>
  ) {
    this.count$ = store.select('count')
  }

  ngOnInit(): void {}
  increment(){
    this.store.dispatch(increment())
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }
}
