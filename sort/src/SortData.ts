interface Sortable {
  length: number,
  compare(leftInd: number, rightInd: number): boolean,
  swap(leftInd: number, rightInd: number): void
}

export abstract class SortData {
  abstract length: number
  abstract compare(first: number, second: number): boolean
  abstract swap(first: number, second: number): void

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}