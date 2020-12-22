"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var SortData_1 = require("./SortData");
var numbers = new NumbersCollection_1.NumbersCollection([-10, 500, 0, -1, 3]);
var array = new SortData_1.SortData(numbers);
array.sort();
console.log(numbers.data);
