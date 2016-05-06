var swap = function(items, first, second) {
	var temp = items[first];
	items[first] = items[second]
	items[second] = temp;
}

var selectionSort = function(items) {
	var min;

	for (var i=0; i< items.length; i++) {
		min = i;
		for(var j=i+1; j<items.length; j++) {
			if (items[j] < items[min]) {
				min = j;
			}
		}

		if (i != min) {
			swap(items, i, min);
		}
	}
	console.log(items)
}

selectionSort([0,5,2,8,9,65])