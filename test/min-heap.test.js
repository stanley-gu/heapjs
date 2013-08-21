/**
 * Heap testing
 * @link https://github.com/stanley-gu/heapjs
 * @author Stanley Gu (stanleygu@gmail.com)
 */

describe('The Heap array indexing functions', function() {
    
    beforeEach(function() {
        minHeap = new MinHeap();
        minHeap.setArray(['a', 'b', 'c', 'd', 'e'])
    });
    
    it('should return parent indices', function() {
        expect(minHeap.getParentInd(1)).toEqual(0);
        expect(minHeap.getParentInd(2)).toEqual(0);
        expect(minHeap.getParentInd(3)).toEqual(1);
        expect(minHeap.getParentInd(4)).toEqual(1);
    });
    
    it('should return child indices', function() {
        expect(minHeap.getChildrenInds(0)).toEqual([1, 2]);
        expect(minHeap.getChildrenInds(1)).toEqual([3, 4]);
        expect(minHeap.getChildrenInds(2)).toEqual([5, 6]);
        expect(minHeap.getChildrenInds(3)).toEqual([7, 8]);
    })
    
    it('should return parent values', function() {
        expect(minHeap.getParent(0)).toEqual('a');
        expect(minHeap.getParent(1)).toEqual('a');
        expect(minHeap.getParent(2)).toEqual('a');
        expect(minHeap.getParent(3)).toEqual('b');
        expect(minHeap.getParent(4)).toEqual('b');
    });
    
    it('should return child values', function() {
        expect(minHeap.getChildren(0)).toEqual(['b', 'c']);
        expect(minHeap.getChildren(1)).toEqual(['d', 'e']);
        expect(minHeap.getChildren(2)).toEqual([null, null]);
        expect(minHeap.getChildren(3)).toEqual([null, null]);
        expect(minHeap.getChildren(4)).toEqual([null, null]);
    });
})


describe('Insert', function() {
    
    beforeEach(function() {
        minHeap = new MinHeap();
        minHeap.setArray([1, 2, 3, 4, 5])
    });
    
    it('should bubble up smaller values', function() {
        minHeap.insert(2);
        expect(minHeap.array).toEqual([1, 2, 2, 4, 5, 3]);
        minHeap.insert(0);
        expect(minHeap.array).toEqual([0, 2, 1, 4, 5, 3, 2]);
    });
});


describe('Pop', function() {
    
    beforeEach(function() {
        minHeap = new MinHeap();
        minHeap.setArray([1, 2, 3, 4, 5])
    });
    
    it('should bubble down smaller values', function() {
        minHeap.pop();
        expect(minHeap.array).toEqual([2, 4, 3, 5]);
        minHeap.pop();
        expect(minHeap.array).toEqual([3, 4, 5]);
    });
});
