process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function node(data) {
    var self = this;
    self.data = data;
    self.left = null;
    self.right = null;
}

function isBST(node, min, max) { 
  if (!node) 
     return true;
  if (node.data < min || node.data > max) 
     return false;
     
  return isBST(node.left, min, node.data-1) && isBST(node.right, node.data+1, max);
} 

function start() {
	var root = new node(4);
	root.left = new node(2);
	root.right = new node(5);
	root.left.left = new node(1);
	root.left.right = new node(3); 
	
	console.log(isBST(root, 0, 10));
}
start();