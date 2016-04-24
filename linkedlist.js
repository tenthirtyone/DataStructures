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
			insertNode: function(position, val) {
				if (Math.abs(position) > this.length + 1) {
					console.log('Insert position greater than Linked List length + 1');
				} else if (position < 0) {
					console.log('Position must be greater than 0 in a singly Linked List');
				} else {
					console.log('insert node at %s', position) 
					var temp = this.head;
					while (position != 1) {
						temp = temp.next;
					}
					var tempList = temp.next;
					temp.next = getNode(val);
					temp.next.next = tempList;
				
				}
			},
			removeNode: function(position) {
				if (Math.abs(position) > this.length) {
					console.log('Removal position greater than Linked List length');
				} else  if (position < 0) {
					console.log('Position must be greater than 0 in a singly Linked List');
				}else {
					console.log('remove node %s', position);
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

	function getNode(val) {
		var node = {
			val: val || 0,
			next: null
		}
		return node;
	};

	var ll = linkedList();
	
	ll.toString();
	ll.addNode(1);
	ll.addNode(2);
	ll.addNode(3);
	ll.addNode(4);
	ll.addNode(5);
	ll.toString();
	ll.removeNode(2);
	ll.toString();
	ll.insertNode(1, 9);
	ll.insertNode(0, 9);
	ll.toString();
}());