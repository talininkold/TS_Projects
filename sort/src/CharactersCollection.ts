import { SortData } from "./SortData"

export class CharactersCollection extends SortData {
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftInd: number, rightInd: number): boolean {
    return this.data[leftInd].toLocaleLowerCase() > this.data[rightInd].toLocaleLowerCase()
  }

  swap(leftInd: number, rightInd: number): void {
    const characters = this.data.split('')
    const max = characters[leftInd]
    characters[leftInd] = characters[rightInd]
    characters[rightInd] = max
    this.data = characters.join('')
  }
}