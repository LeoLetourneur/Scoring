import { Component } from '@angular/core';
import { DataAccessService } from '../../providers/data-access.service';
import { Score } from '../../models/score';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {

  public disable: boolean;
  public score: Score = new Score;
  public scores: Score[];

  constructor(
    public dataAccessService: DataAccessService
  ) {
    this.getScores();
  }

  getScores() {
    this.dataAccessService.getScores().then(data => {
      this.scores = data;
      this.disable = false;
    });
  }

  pushScore() {
    this.disable = true;
    this.dataAccessService.pushScore(this.score).then(() => {
      this.score = new Score();
      this.getScores();
    });
  }
}
