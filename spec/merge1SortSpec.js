// This Version 1 is the cleaned up version to submit to the student portal.

var mergeSortApp = require("../mergeSort1.js");

// start testing the merge function here
describe('the merge function', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSortApp.merge([1],[2])).toEqual([1,2]);
  });
});

describe('the merge function', function() {
  it('should merge two arrays of size 2', function() {
     expect(mergeSortApp.merge([1,2],[3,4])).toEqual([1,2,3,4]);
  });
});

describe('the merge function', function() {
  it('should merge two arrays of size 2 where numbers overlap', function() {
     expect(mergeSortApp.merge([1,3],[2,4])).toEqual([1,2,3,4]);
  });
});

describe('the merge function', function() {
  it('should merge two arrays of size 2 where the first arrays numbers are larger', function() {
     expect(mergeSortApp.merge([3,4],[1,2])).toEqual([1,2,3,4]);
  });
});

describe('the merge function', function() {
  it('should merge two arrays of different lengths', function() {
     expect(mergeSortApp.merge([3,4],[1,2,5,7])).toEqual([1,2,3,4,5,7]);
  });
});

// start testing the mergeSort function here
describe('the mergeSort function', function() {
  it('should sort an array', function() {
     expect(mergeSortApp.mergeSort([2,1])).toEqual([1,2]);
  });
});

describe('the mergeSort function', function() {
    it('should sort an array of size 4', function() {
       expect(mergeSortApp.mergeSort([1,3,2,4])).toEqual([1,2,3,4]);
    });
});



