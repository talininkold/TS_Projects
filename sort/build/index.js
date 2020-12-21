"use strict";
var SortData = /** @class */ (function () {
    function SortData(collection) {
        this.collection = collection;
    }
    SortData.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var max = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = max;
                }
            }
        }
    };
    return SortData;
}());
var array = new SortData([-10, 5, 0, -1]);
array.sort();
console.log(array.collection);
