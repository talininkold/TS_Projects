import { MatchResults } from '../matchResults';
import {Analyzer} from '../Summary'
import { TableLine } from '../types';

export class TeamWinsAnylizer implements Analyzer {
  constructor(public name: string) {}

  analyze(data: TableLine[]) {
    let wins = 0

    for (let dataLine of data) {
      if (dataLine[1] === this.name && dataLine[5] === MatchResults.HomeWin) {
        wins++
      } else if(dataLine[2] === this.name && dataLine[5] === MatchResults.AwayWin) {
        wins++
      }
    }
    return `${this.name} wins ${wins} times`
  }
}