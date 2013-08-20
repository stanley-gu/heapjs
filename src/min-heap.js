/**
 * Min-Heap
 * @link https://github.com/stanley-gu/heapjs
 * @author Stanley Gu (stanleygu@gmail.com)
 */


/**
* A Min-Heap
*
* @class MinHeap
* @constructor
*/
var MinHeap = function() {
    this.array = [];
};

MinHeap.prototype.setArray = function(array) {
    this.array = array;
};
/**
 * My method description.  Like other pieces of your comment blocks,
 * this can span multiple lines.
 *
 * @method getChildren
 * @param {Number} index Index of element to get the children indices of
 * @return {Number} Returns value of parent
 */
MinHeap.prototype.getParent = function (index) {
    var parentInd = this.getParentInd(index);
    return this.array[parentInd];
};

/**
 * My method description.  Like other pieces of your comment blocks,
 * this can span multiple lines.
 *
 * @method getChildrenInds
 * @param {Number} index Index of element to get the children indices of
 * @return {Array} Returns values containing children, null if no children
 */
MinHeap.prototype.getChildren = function (index) {
    var childrenInds = this.getChildrenInds(index);
    var children = childrenInds.map(function(i) {
        if (i > this.array.length) {
            return null;
        } else {
            return this.array[i];
        }
    }, this);
    return children;
};


/**
 * My method description.  Like other pieces of your comment blocks,
 * this can span multiple lines.
 *
 * @method getChildrenInds
 * @param {Number} index Index of element to get the children indices of
 * @return {Array} Returns indices containing children
 */
MinHeap.prototype.getChildrenInds = function (index) {
    return [(index + 1) * 2 - 1, (index + 1) * 2];
};

/**
 * My method description.  Like other pieces of your comment blocks,
 * this can span multiple lines.
 *
 * @method getParent
 * @param {Number} index Index of element to get the parent index of
 * @return {Number} Returns index of parent
 */
MinHeap.prototype.getParentInd = function (index) {
    // returns 0 if root
    if (index === 0) {
        return 0;
    } else {
        return Math.floor((index - 1) / 2);
    }
};
