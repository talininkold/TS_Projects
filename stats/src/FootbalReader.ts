import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from "./matchResults";
import { TableLine } from "./types";
import { stringToDataFormat } from "./utils";

export interface DataReader {
  data: string[][],
  read(): void
}

export class FootballReader {
  loadData: TableLine[] = []

  constructor(public reader: DataReader) {}

  static fromCsv(title: string):FootballReader {
    return new FootballReader(new CsvFileReader(title))
  }

  load(): void {
    this.reader.read()
    this.loadData = this.reader.data.map((line: string[]): TableLine => { 
      return [
        stringToDataFormat(line[0]),
        line[1],
        line[2],
        parseFloat(line[3]),
        parseFloat(line[4]),
        line[5] as MatchResults,
        line[6]
      ]
    })
  }
}