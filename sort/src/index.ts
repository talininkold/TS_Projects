import { CharactersCollection } from './CharactersCollection'
import { NumbersCollection } from './NumbersCollection'
import { LinkedList } from "./LinkedList";


const numbers = new NumbersCollection([-10, 500, 0, -1, 3])
numbers.sort()
console.log(numbers.data)

const characters = new CharactersCollection('AsxYb')
characters.sort()
console.log(characters.data)

const linkedList = new LinkedList()
linkedList.add(-100)
linkedList.add(700)
linkedList.add(300)
linkedList.add(-5)
linkedList.add(0)
linkedList.sort()
linkedList.print()

