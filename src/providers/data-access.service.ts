import { Injectable } from '@angular/core';
import { Score } from 'src/models/score';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataAccessService {

  private entity = 'https://mixitleo.firebaseio.com/scores.json';

  constructor(public http: HttpClient) { }

  getScores(): Promise<any[]> {
    return this.http.get(this.entity).toPromise().then((data: any[]) => {
      console.log(data);
      const keys = Object.keys(data);
      let table = [];
      keys.forEach(key => {
        table.push(data[key]);
      });
      console.log(table);
      table = table.sort((a, b) => a.score > b.score ? 1 : -1);
      console.log(table);
      return table;
    });
  }


  pushScore(score: Score): Promise<void> {
    return this.http.post(this.entity, score).toPromise().then(() => { return; });
  }

}
