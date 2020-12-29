import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from "../matchResults";
import { stringToDataFormat } from "../utils";

type TableLine = [Date, string, string, number, number, MatchResults, string]

export class FootballReader extends CsvFileReader<TableLine> {
  formatRow(line: string[]): TableLine {
    return [
      stringToDataFormat(line[0]),
      line[1],
      line[2],
      parseFloat(line[3]),
      parseFloat(line[4]),
      line[5] as MatchResults,
      line[6]
    ]
  }
}