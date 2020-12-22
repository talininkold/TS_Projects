import fs from 'fs'

const data = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map((line: string): string[] => line.split(','))

let manUnitedWins = 0

enum MatchResults {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

for (let dataLine of data) {
  if (dataLine[1] === 'Man United' && dataLine[5] === MatchResults.HomeWin) {
    manUnitedWins++
  } else if(dataLine[2] === 'Man United' && dataLine[5] === MatchResults.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United wins ${manUnitedWins} times`)