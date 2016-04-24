/* Given an array of integers find all pairs that sum to a target
*/

var intArr = [0,1,2,3,4,5];
var target = 6;
var results = [];

// n^2
for (var i = 0; i < intArr.length; i++) {
	for (var j = i+1; j < intArr.length; j++) {
		if (i + j === target) {
			results.push([i,j]);
		}
	}
}

console.log(results);
var results = [];
var dict = {};

// n
for (var i = 0; i < intArr.length; i++) {
	dict[intArr[i]] = intArr[i];
}

for (var i = 0; i < intArr.length; i++) {
	if (dict[(target-intArr[i])]) {
		results.push([intArr[i], dict[(target-intArr[i])]]);
	}
}