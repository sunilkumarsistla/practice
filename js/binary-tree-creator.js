process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function node(data) {
    var self = this;
    self.data = data;
    self.left = null;
    self.right = null;
}

function binaryTreeFormer () {
	var self = this;
	var currentIndex = 0;
	
	var searchFirstIndexOfItemFromSubArray = function(arr, start, end, val) {
		var i = start;
		while(arr[i] !== val) {
			++i;
		}
		return i;
	};
	
	var fromInPreOrder = function (inOrder, preOrder, startIndex, endIndex) {
		if(startIndex > endIndex) {
			return null;
		}
		var n = new node(preOrder[currentIndex++]);
		if(startIndex === endIndex) {
			return n;
		}
		var inOrderIndex = searchFirstIndexOfItemFromSubArray(inOrder, startIndex, endIndex, n.data);
		
		n.left = fromInPreOrder(inOrder, preOrder, startIndex, inOrderIndex-1);
		n.right = fromInPreOrder(inOrder, preOrder, inOrderIndex+1, endIndex);
		return n;
	};
	var fromInPostOrder= function (inOrder, postOrder, startIndex, endIndex) {
		if(startIndex > endIndex) {
			return null;
		}
		var n = new node(postOrder[currentIndex--]);
		var inOrderIndex = searchFirstIndexOfItemFromSubArray(inOrder, startIndex, endIndex, n.data);
		
		n.right = fromInPostOrder(inOrder, postOrder, inOrderIndex+1, endIndex);
		n.left = fromInPostOrder(inOrder, postOrder, startIndex, inOrderIndex-1);
		return n;		
	};

	self.fromInAndPreOrder = function(inOrder, preOrder) { 
		if(inOrder.length !== preOrder.length) {
			throw "given orders don't match";
		}
		currentIndex = 0;
		return fromInPreOrder(inOrder, preOrder, 0, inOrder.length - 1);
	};
	self.fromInAndPostOrder = function(inOrder, postOrder) {
		if(inOrder.length !== postOrder.length) {
			throw "given orders don't match";
		}  
		currentIndex = inOrder.length - 1;
		return fromInPostOrder(inOrder, postOrder, 0, inOrder.length - 1);
	}
}

function traverser () {
	var self = this;
	var inOrderTraverser = function (root) {
		if(!root) {
			return "";
		}
		return inOrderTraverser(root.left) + root.data + " " + inOrderTraverser(root.right);
	};
	var preOrderTraverser = function (root) {
		if(!root) {
			return "";
		}
		return root.data + " " + preOrderTraverser(root.left) + preOrderTraverser(root.right);
	};
	var postOrderTraverser = function (root) {
		if(!root) {
			return "";
		}
		return postOrderTraverser(root.left) +  postOrderTraverser(root.right) + root.data + " ";
	};
	
	self.inOrder = inOrderTraverser;
	self.preOrder = preOrderTraverser;
	self.postOrder = postOrderTraverser;
}

function start() {
	var root;
	var inOrder = "4 8 2 5 1 6 3 7".split(" ").map(Number);
	var preOrder = "1 2 4 8 5 3 6 7".split(" ").map(Number);
	var postOrder = "8 4 5 2 6 7 3 1".split(" ").map(Number);
	var bTreeCreator = new binaryTreeFormer();
    var traverse = new traverser();
	root = bTreeCreator.fromInAndPreOrder(inOrder, preOrder);
	console.log("  in: ", traverse.inOrder(root));
	console.log(" pre: ", traverse.preOrder(root));
	console.log("post: ", traverse.postOrder(root));
	root = bTreeCreator.fromInAndPostOrder(inOrder, postOrder);
	console.log("  in: ", traverse.inOrder(root));
	console.log(" pre: ", traverse.preOrder(root));
	console.log("post: ", traverse.postOrder(root));
}

start();