// This Version 1 is the cleaned up version to submit to the student portal.

// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.


// TIM'S SOLUTION FROM CLASS:
exports.merge = function(leftArr, rightArr){

	var results = [];
	var LI = 0;
	var RI = 0;

	while (LI < leftArr.length || RI < rightArr.length){
		if (LI === leftArr.length) {
			results.push(rightArr[RI]);
			RI++;
		}
		else if (RI === rightArr.length) {
			results.push(leftArr[LI]);
			LI++;
		}
		else if (leftArr[LI] <= rightArr[RI]) {
			results.push(leftArr[LI]);
			LI++;
		}
		else if (leftArr[LI] > rightArr[RI]) {
			results.push(rightArr[RI]);
			RI++;
		}
	}
	return results;
}


// this has to test arrays with more than one item, otherwise the test would return false?
exports.mergeSort = function(arr) {				
		if (arr.length < 2 ) {						// line 1
			return arr;								// line 2
		}
		
		// we split the array in half:
		var midway = Math.floor(arr.length/2)			// line 3
		var newLeftArr = arr.slice(0, midway);				// line 4
		var newRightArr = arr.slice (midway, arr.length);		// line 5
		// slice is different than splice!
		// slice does not extract the second number, rather, everything before and just up to that number
		
		// this is the recursive part
		return exports.merge(exports.mergeSort(newLeftArr), exports.mergeSort(newRightArr));// line 8 (I deleted lines 6 & 7 from the in-class example because they were unnecessary?)		
}	
	
// sort([5,7,1,2]);
