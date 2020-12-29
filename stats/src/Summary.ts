import { TeamWinsAnylizer } from "./anylizers/TeamWinsAnylizer"
import { HtmlOutput } from "./output/HtmlOutput"
import { TableLine } from "./types"

export interface Analyzer {
  name: string,
  analyze(data: TableLine[]): string
}

export interface Output {
  print(data: string): void
}

export class Summary {
  constructor(public analyzer: Analyzer, public output: Output) {}

  static winsAnalyzeAndHtmlOutput(team: string): Summary {
    return new Summary(new TeamWinsAnylizer(team), new HtmlOutput())
  }

  analyzeAndPrint(data: TableLine[]): void {
    const result = this.analyzer.analyze(data)
    this.output.print(result)
  }
}