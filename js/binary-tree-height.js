process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function node(data) {
    var self = this;
    self.data = data;
    self.left = null;
    self.right = null;
}

function maxHeight(root) {
	if(!root) {
		return 0;
	}	
	var leftTreeHeight = maxHeight(root.left);
	var rightTreeHeight = maxHeight(root.right);
	return (leftTreeHeight > rightTreeHeight ? leftTreeHeight : rightTreeHeight) + 1;
}

function formBinaryTree() {	
    var root = new node(1);
    root.left = new node(2);
    root.left.left = new node(4);
    root.left.right = new node(5);
    root.right = new node(3);
    return root;
}

function start() {
	console.log(maxHeight(formBinaryTree()));
}

start();