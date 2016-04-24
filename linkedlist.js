(function() {
	'use strict';

	function linkedList() {
		var linkedList = {
			head: getNode(),
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
			addNode: function(val) {
				var temp = this.head;
				while (temp.next !== null) {
					temp = temp.next;
				}
				temp.next = getNode(val);
				this.length++;
			},
			removeNode: function(index) {
				if (Math.abs(index) > this.length) {
					console.log('Removal index greater than Linked List length');
				} else {
					console.log('remove node %s', index);
				}
			}
		}
		return linkedList;
	}

	function getNode(val) {
		var node = {
			val: val || 0,
			next: null
		}
		return node;
	};

	var ll = linkedList();
	
	ll.toString();
	ll.addNode(2);
	ll.addNode(4);
	ll.addNode(6);
	ll.addNode(9);
	ll.toString();
	ll.removeNode(2);
}());