import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'scoring'})
export class ScoringPipe implements PipeTransform {
  transform(value: number): any {
    const str = value.toString();
    return str.charAt(0) + '\'' + str.charAt(1) + str.charAt(2) + '\'' + str.charAt(3) + str.charAt(4);
  }
}
