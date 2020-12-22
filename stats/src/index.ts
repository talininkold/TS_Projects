import { CsvFileReader } from "./CsvFileReader"
import { FootballReader } from "./FootbalReader"
import { MatchResults } from "./matchResults"

const file = new FootballReader('football.csv')
file.read()
// console.log(file.data)

let manUnitedWins = 0

for (let dataLine of file.data) {
  if (dataLine[1] === 'Man United' && dataLine[5] === MatchResults.HomeWin) {
    manUnitedWins++
  } else if(dataLine[2] === 'Man United' && dataLine[5] === MatchResults.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United wins ${manUnitedWins} times`)