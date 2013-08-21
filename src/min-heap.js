/**
 * Min-Heap
 * @link https://github.com/stanley-gu/heapjs
 * @author Stanley Gu (stanleygu@gmail.com)
 */


/**
* Min-Heap
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


MinHeap.prototype.getMin = function() {
    return this.array[0];
};


MinHeap.prototype.insert = function(item) {
    this.array.push(item);
    this.bubbleUp(this.array.length - 1);
};

MinHeap.prototype.bubbleUp = function(index) {
    var parentInd = this.getParentInd(index);
    while (this.array[index] < this.array[parentInd]) {
        // swap
        var value = this.array[index];
        this.array[index] = this.array[parentInd];
        this.array[parentInd] = value;
        
        // update
        index = parentInd;
        parentInd = this.getParentInd(index);
    }
};


MinHeap.prototype.pop = function() {
    this.array[0] = this.array[this.array.length - 1];
    this.array.pop();
    this.bubbleDown();
};

MinHeap.prototype.bubbleDown = function() {
    var index = 0;
    while (true) {
        var childrenInds = this.getChildrenInds(index);
        var children = this.getChildren(index);
    
        var left = (children[0] && (this.array[index] > children[0]))  
        var right = (children[1] && (this.array[index] > children[1]))
        
        debugger;
        if (!left && !right) {
            break;
        }
        
        if (left && right) {
            if (children[0] < children[1]) {
                var value = this.array[index];
                this.array[index] = children[0];
                this.array[childrenInds[0]] = value;
                index = childrenInds[0];
            } else {
                var value = this.array[index];
                this.array[index] = children[1];
                this.array[childrenInds[1]] = value;
                index = childrenInds[1];
            }
        } else if (left) { // swap left
            var value = this.array[index];
            this.array[index] = children[0];
            this.array[childrenInds[0]] = value;
            index = childrenInds[0];
        } else { // swap right
            var value = this.array[index];
            this.array[index] = children[1];
            this.array[childrenInds[1]] = value;
            index = childrenInds[1];
        }
    }
};



/**
 * Gets the contents of the parent node to node at the specified index.
 *
 * @method getParent
 * @param {Number} index Index of element to get the children indices of
 * @return {Number} Returns value of parent
 */
MinHeap.prototype.getParent = function (index) {
    var parentInd = this.getParentInd(index);
    return this.array[parentInd];
};

/**
 * Returns an array containing the contents of the children nodes, or null if
 * none exist.
 *
 * @method getChildren
 * @param {Number} index Index of element to get the children indices of
 * @return {Array} Returns values containing children, null if no children
 */
MinHeap.prototype.getChildren = function (index) {
    var childrenInds = this.getChildrenInds(index);
    var children = childrenInds.map(function(i) {
        if (i > this.array.length - 1) {
            return null;
        } else {
            return this.array[i];
        }
    }, this);
    return children;
};


/**
 * Gets array of children indices. Note: Children may not yet exist at the given
 * indices.
 *
 * @method getChildrenInds
 * @param {Number} index Index of element to get the children indices of
 * @return {Array} Returns indices containing children
 */
MinHeap.prototype.getChildrenInds = function (index) {
    return [(index + 1) * 2 - 1, (index + 1) * 2];
};

/**
 * Gets index of parent
 *
 * @method getParentInd
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
