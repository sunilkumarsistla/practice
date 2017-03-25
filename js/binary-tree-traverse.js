process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function node(data) {
    var self = this;
    self.data = data;
    self.left = null;
    self.right = null;
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

function formBinaryTree(input) {	
    var root = new node(1);
    root.left = new node(2);
    root.left.left = new node(4);
    root.left.right = new node(5);
    root.right = new node(3);
    return root;
}

function start(inorder) {
    var root = formBinaryTree();
    var traverse = new traverser();
	console.log("  in: ", traverse.inOrder(root));
	console.log(" pre: ", traverse.preOrder(root));
	console.log("post: ", traverse.postOrder(root));
}

start();