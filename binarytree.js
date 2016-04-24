(function() {
	'use strict';

	var binaryTree = function() {
		return {
			root: getNode(),
			size: 0,
			addNode: function(val, node) {
				if (!node) {
					node = this.root;
				}
				if (val < node.val) {
					if (node.left === null) {
						node.left = getNode(val);
					} else {
						addNode(val, node.left);
					}
				} else if (val > node.val) {
					if (node.right === null) {
						node.right = getNode(val);
					} else {
						addNode(val, node.right);
					}
				}
			},
			removeNode: function(val) {

			}
		}
	}

	var getNode = function(val) {
		return {
			val: val || 0,
			left: null,
			right: null
		}
	}

	module.exports = {
		BinaryTree: binaryTree
	}
})