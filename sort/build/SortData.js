"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortData = void 0;
var SortData = /** @class */ (function () {
    function SortData(collection) {
        this.collection = collection;
    }
    SortData.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return SortData;
}());
exports.SortData = SortData;
