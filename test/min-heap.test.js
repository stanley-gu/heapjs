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
    });
})
