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
			insertNode: function(index)
			removeNode: function(position) {
				if (Math.abs(index) > this.length) {
					console.log('Removal position greater than Linked List length');
				} else {
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
}());