var BinaryTreeService = require('./binarytree');

var BTree = BinaryTreeService.BinaryTree();

for (var i = 0; i <10; i++) {
	BTree.addNode(parseInt(Math.random()*100));	
}
BTree.toString();