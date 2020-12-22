import { CsvFileReader } from "./CsvFileReader"

const file = new CsvFileReader('football.csv')
file.read()

let manUnitedWins = 0

enum MatchResults {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

for (let dataLine of file.data) {
  if (dataLine[1] === 'Man United' && dataLine[5] === MatchResults.HomeWin) {
    manUnitedWins++
  } else if(dataLine[2] === 'Man United' && dataLine[5] === MatchResults.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United wins ${manUnitedWins} times`)