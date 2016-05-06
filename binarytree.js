(function() {
	'use strict';

	var binaryTree = function() {
		return {
			root: getNode(50),
			size: 0,
			addNode: function(val, node) {

				if (!node) {
					node = this.root;
				}
				
				if (val < node.val) {
					if (node.left === null) {
						node.left = getNode(val);
					} else {
						this.addNode(val, node.left);
					}
				} else if (val > node.val) {
					if (node.right === null) {
						node.right = getNode(val);
					} else {
						this.addNode(val, node.right);
					}
				}
			},
			removeNode: function(val) {

			},
			toString: function(node, height) {
				//pre-order traversal
				console.log()
				
				if (!node) {
					node = this.root;
				}
				if (!height) {
					height = 0;
				} else {
					height++
				}
				console.log(node);
				console.log(' ' + node.left);
				console.log(' ' + node.right);
				if (node.left) {
					this.toString(node.left, height);
				}
				if (node.right) {
					this.toString(node.right, height);
				}

			}
		}
	}

	var getNode = function(val) {
		return {
			val: val || 0,
			left: null,
			right: null,
			toString: function() {
				console.log(this.val);
			}
		}
	}

	module.exports = {
		BinaryTree: binaryTree
	}
}())