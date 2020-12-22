interface Sortable {
  length: number,
  compare(leftInd: number, rightInd: number): boolean,
  swap(leftInd: number, rightInd: number): void
}

export class SortData {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }
}