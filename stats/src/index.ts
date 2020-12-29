// import { FootballReader } from "./inheritance/FootbalReader"
import { MatchResults } from "./matchResults"

import { CsvFileReader } from "./CsvFileReader"
import { FootballReader } from "./FootbalReader"
import { Summary } from "./Summary"
import { TeamWinsAnylizer } from "./anylizers/TeamWinsAnylizer"
import { ConsoleOutput } from "./output/ConsoleOutput"
import { HtmlOutput } from "./output/HtmlOutput"

// const file = new FootballReader('football.csv')
// file.read()

const CsvReader = new CsvFileReader('football.csv')
const Football = new FootballReader(CsvReader)
Football.load()

const summary = new Summary(new TeamWinsAnylizer('Liverpool'), new HtmlOutput())
summary.analyzeAndPrint(Football.loadData)