process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function node(data) {
    var self = this;
    self.data = data;
    self.left = null;
    self.right = null;
}

function printArr(arr) {
	var data = [];
	for(var i=0;i<arr.length;i++)
		data.push(arr[i].data);
	console.log(data);
}

function getMaxWidth(root) {
	if(!root) {
		return 0;
	}
	var maxWidth = 0, node, i;
	function doBfs(arr) {
	    if(arr.length === 0)
	        return maxWidth;
	    var len = arr.length;
		maxWidth = maxWidth > len ? maxWidth : len;
		for(i=0;i<len;i++) {
			node = arr.shift();
			if(node.left) arr.push(node.left);
			if(node.right) arr.push(node.right);
		}
		return doBfs(arr);
	}
	return doBfs([root]);
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
	console.log(getMaxWidth(formBinaryTree()));
}

start();