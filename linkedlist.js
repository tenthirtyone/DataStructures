(function() {
	'use strict';

	function linkedList() {
		var linkedList = {
			head: this.getNode(),
			length: 0,
			toString: function() {
				var temp = this.head;
				var retArr = [];
				retArr.push(temp.val);
				while (temp.next !== null) {
					temp = temp.next;
					retArr.push(temp.val);
				}
				console.log(retArr);
			},
			getNode: function (val) {
				var node = {
					val: val || 0,
					next: null
				}
				return node;
			},
			addNode: function(val) {
				var temp = this.head;
				while (temp.next !== null) {
					temp = temp.next;
				}
				temp.next = this.getNode(val);
				this.length++;
			},
			insertNode: function(position, val) {
				console.log('insert node at %s', position) 
				if (Math.abs(position) > this.length + 1) {
					console.log('Insert position greater than Linked List length + 1');
				} else if (position < 0) {
					console.log('Position must be greater than 0 in a singly Linked List');
				} else if (position === 0) {
					var tempList = this.head;
					this.head = this.getNode(val);
					this.head.next = tempList;
				} else {
					var temp = this.head;
					while (position != 1) {
						temp = temp.next;
					}
					var tempList = temp.next;
					temp.next = this.getNode(val);
					temp.next.next = tempList;
				
				}
			},
			removeNode: function(position) {
				console.log('remove node %s', position);
				if (Math.abs(position) > this.length) {
					console.log('Removal position greater than Linked List length');
				} else  if (position < 0) {
					console.log('Position must be greater than 0 in a singly Linked List');
				} else if (position === 0) {
					this.head = this.head.next;
				} else {
					var temp = this.head;
					while (position !== 1) {
						temp = temp.next;
						position--;
					}
					temp.next = temp.next.next;
				}
			}
		}
		return linkedList;
	}

	module.exports = {
		LinkedList: linkedList
	}

}());