import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { awayScore, homeScore, resetScore, setScore } from '../../store/score/score.actions';
import { State } from '../../store/score/score.reducer';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {
  public score$: Observable<State>;
  constructor(
    private store: Store<{score: State}>
  ) { 
    this.score$ = this.store.select('score')
  }

  ngOnInit(): void {
    this.score$.subscribe(resp=>{
      console.log(resp)
    })
  }
  homeScore(){
    this.store.dispatch(homeScore())
  }
  awayScore(){
    this.store.dispatch(awayScore())
  }
  resetScore(){
    this.store.dispatch(resetScore())
  }
  setScore() {
    const game = {aways: 5, home: 6}
    this.store.dispatch(setScore({ game }))
  }

}
