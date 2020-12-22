// import { CharactersCollection } from './CharactersCollection'
// import { NumbersCollection } from './NumbersCollection'
import { SortData } from './SortData'

import { LinkedList } from "./LinkedList";


// const numbers = new NumbersCollection([-10, 500, 0, -1, 3])
// const characters = new CharactersCollection('AsxYb')
const linkedList = new LinkedList()
linkedList.add(-100)
linkedList.add(700)
linkedList.add(300)
linkedList.add(-5)
linkedList.add(0)

const sort = new SortData(linkedList)
sort.sort()
linkedList.print()

// const array = new SortData(numbers)
// const array2 = new SortData(characters)
// array2.sort()
// console.log(characters.data)