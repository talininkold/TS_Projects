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

  analyzeAndPrint(data: TableLine[]): void {
    const result = this.analyzer.analyze(data)
    this.output.print(result)
  }
}