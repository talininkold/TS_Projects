class SortData {
  constructor(public collection: number[]) {}

  sort(): void {
    const length = this.collection.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j+1]) {
          const max = this.collection[j]
          this.collection[j] = this.collection[j+1]
          this.collection[j+1] = max
        }
      }
    }
  }
}

const array = new SortData([-10, 5, 0, -1])
array.sort()
console.log(array.collection)