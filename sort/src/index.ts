import { NumbersCollection } from './NumbersCollection'
import { SortData } from './SortData'

const numbers = new NumbersCollection([-10, 500, 0, -1, 3])
const array = new SortData(numbers)
array.sort()
console.log(numbers.data)