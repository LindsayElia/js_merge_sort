// This Version 1 is the cleaned up version to submit to the student portal.

// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.

// this puts two arrays together by comparing the first item in each array and pushing
// the smaller of those two items into a new array called 'results'
exports.merge = function(leftArr, rightArr){

	var results = [];
	var LI = 0;
	var RI = 0;

	while (LI < leftArr.length || RI < rightArr.length){
		if (LI === leftArr.length) {		// if the LI is at the end of the leftArr length, 
			results.push(rightArr[RI]);		// that means it will return undefined and
			RI++;							// this array is empty, so we know that we should just
											// return whatever is in the right array
		}
		else if (RI === rightArr.length) {	// ditto for the right array, if empty, return
			results.push(leftArr[LI]);		// whatever is in the left array
			LI++;
		}
		else if (leftArr[LI] <= rightArr[RI]) {	// if the VALUE that is stored inside of the 
			results.push(leftArr[LI]);			// left array index is less than or equal to the VALUE
			LI++;								// that is stored inside of the right array index,
		}										// increment the index counter
		else if (leftArr[LI] > rightArr[RI]) {
			results.push(rightArr[RI]);			// ditto for the reverse
			RI++;
		}
	}
	return results;
}


// this has to test arrays with more than one item, otherwise the test would return false?
exports.mergeSort = function(arr) {				
		if (arr.length < 2 ) {								// line 1
			return arr;										// line 2
		}
		
		// we split the array in half:
		var midway = Math.floor(arr.length/2)				// line 3
		var newLeftArr = arr.slice(0, midway);				// line 4
		var newRightArr = arr.slice (midway, arr.length);	// line 5
		// slice is different than splice!
		// slice does not extract the second number, rather, everything before and just up to that number
		
		// this is the recursive part
		return exports.merge(exports.mergeSort(newLeftArr), exports.mergeSort(newRightArr));// line 8 (I deleted lines 6 & 7 from the in-class example because they were unnecessary?)		
}	
	
// sort([5,7,1,2]);
