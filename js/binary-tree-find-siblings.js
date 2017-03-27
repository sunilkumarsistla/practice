process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function node(data) {
    var self = this;
    self.data = data;
    self.left = null;
    self.right = null;
}

function getAllSiblings(root) {
	if(!root) 
		return [];
		
	function doBfs(arr, currentSibs) {
		var len = arr.length;
		if(len === 0)
			return currentSibs;
		for(var i=0;i<len;i++) {
			var cNode = arr.shift();
			if(cNode.left) {
				arr.push(cNode.left);
			}
			if(cNode.right) {
				arr.push(cNode.right);
			}
			if(cNode.left && cNode.right)
				currentSibs.push([cNode.left.data, cNode.right.data]);
		}
		return doBfs(arr, currentSibs);
	}	
	
	return doBfs([root], []);
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
	console.log(getAllSiblings(formBinaryTree()));
}

start();