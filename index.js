"use strict";

/**
 * Moves an item the `array` at `index` to the end of the `array`.
 *
 * @param {Array} array The array to modify.
 * @param {number} index Position where to modify the array.
 * @return {Array} array The modified array.
 * @example
 *
 * moveToEnd([1, 2, 3, 4], 1)
 *
 * // => [1, 3, 4, 2]
 */
function moveToEnd(array, index) {
    if (Array.isArray(array) === false) {
        return;
    }
    if (index > array.length) {
        return array;
    }
    var item = array.splice(index, 1)[0];
    array.push(item);
    return array;
}

module.exports = moveToEnd;
