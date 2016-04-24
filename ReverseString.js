var inStr = 'IAmAString';
var outStr = [];

inStr = inStr.split('');

console.log(inStr);

while (inStr.length !== 0) {
	var temp = inStr.pop();
	outStr.push(temp);
}

console.log(outStr.join(''));