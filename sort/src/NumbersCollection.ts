import { SortData } from "./SortData"

export class NumbersCollection extends SortData {
  constructor(public data: number[]) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftInd: number, rightInd: number): boolean {
    return this.data[leftInd] > this.data[rightInd]
  }

  swap(leftInd: number, rightInd: number): void {
    const max = this.data[leftInd]
    this.data[leftInd] = this.data[rightInd]
    this.data[rightInd] = max
  }
}