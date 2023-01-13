"use strict";
// remove duplicate values in a array
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicates = void 0;
function removeDuplicates(arr) {
    return arr.filter(function (item, index) { return arr.indexOf(item) === index; });
}
exports.removeDuplicates = removeDuplicates;
