// import { FootballReader } from "./inheritance/FootbalReader"
import { MatchResults } from "./matchResults"

import { CsvFileReader } from "./CsvFileReader"
import { FootballReader } from "./FootbalReader"

// const file = new FootballReader('football.csv')
// file.read()

const CsvReader = new CsvFileReader('football.csv')
const Football = new FootballReader(CsvReader)
Football.load()

let manUnitedWins = 0

for (let dataLine of Football.loadData) {
  if (dataLine[1] === 'Man United' && dataLine[5] === MatchResults.HomeWin) {
    manUnitedWins++
  } else if(dataLine[2] === 'Man United' && dataLine[5] === MatchResults.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United wins ${manUnitedWins} times`)