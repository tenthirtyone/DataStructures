(function() {
var LinkedList = function() {
	return {
		head: getNode(),
		length: 0,
		addNode: function(value) {
			if (this.head.value === null) {
				this.head.value = value
			}
			var temp = this.head;
			while (temp.next !== null) {
				temp = temp.next
			}
			temp.next = getNode(value);
			this.length++;
		},
		getNodeAtPosition: function(position) {
			console.log('retrieving node at', position);
			if (position === undefined || position > this.length) { return; }
			
			var temp = this.head;
				console.log('temp', temp)
			while (position >= 0) {
				console.log('looping', position)
				console.log(temp.value)
				position --
				temp = temp.next
				console.log(temp.value)
			}
			console.log(temp.value)
		},
		removeNode: function(position) {
			console.log('removing node', position);
			if (position === undefined) { return; }
			if (position > this.length) {
				throw new Error('Remove Position greater than Linked List length');
			}
			var temp = this.head;
			if (position === 0) {
				this.head = this.head.next;
			}
			while (position>0) {
				position--;
				temp = temp.next;
			}
			temp.next = temp.next.next;
		},
		toString: function() {
			var temp = this.head;
			var results = [];
			console.log(temp.value)
			while (temp.next !== null) {
				temp = temp.next;
				results.push(temp.value)
			}
			console.log(results);
		}
	}
}

var getNode = function(value) {
	return {
		value: value || null,
		next: null,
		toString: function(){
			console.log(this.value);
		}
	}
}

module.exports = {
	LinkedList: LinkedList
}
}());