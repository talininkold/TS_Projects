"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CharactersCollection } from './CharactersCollection'
// import { NumbersCollection } from './NumbersCollection'
var SortData_1 = require("./SortData");
var LinkedList_1 = require("./LinkedList");
// const numbers = new NumbersCollection([-10, 500, 0, -1, 3])
// const characters = new CharactersCollection('AsxYb')
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(-100);
linkedList.add(700);
linkedList.add(300);
linkedList.add(-5);
linkedList.add(0);
var sort = new SortData_1.SortData(linkedList);
sort.sort();
linkedList.print();
// const array = new SortData(numbers)
// const array2 = new SortData(characters)
// array2.sort()
// console.log(characters.data)
