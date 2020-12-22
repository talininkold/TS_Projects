"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftInd, rightInd) {
        return this.data[leftInd] > this.data[rightInd];
    };
    NumbersCollection.prototype.swap = function (leftInd, rightInd) {
        var max = this.data[leftInd];
        this.data[leftInd] = this.data[rightInd];
        this.data[rightInd] = max;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
