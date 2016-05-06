var LLService = require ('./linkedlist');

var LL = LLService.LinkedList();

LL.addNode('head');
LL.addNode(1);
LL.addNode(2);
LL.addNode(3);
LL.addNode(4);
LL.addNode(5);

LL.toString();

LL.getNodeAtPosition(5);

LL.toString();
