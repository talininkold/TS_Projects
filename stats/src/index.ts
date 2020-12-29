import { CsvFileReader } from "./CsvFileReader"
import { FootballReader } from "./FootbalReader"
import { Summary } from "./Summary"


const Football = FootballReader.fromCsv('football.csv')
Football.load()

Summary.winsAnalyzeAndHtmlOutput('Liverpool').analyzeAndPrint(Football.loadData)