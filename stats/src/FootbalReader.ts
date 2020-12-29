import { MatchResults } from "./matchResults";
import { stringToDataFormat } from "./utils";

type TableLine = [Date, string, string, number, number, MatchResults, string]

interface DataReader {
  data: string[][],
  read(): void
}

export class FootballReader {
  loadData: TableLine[] = []

  constructor(public reader: DataReader) {}

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