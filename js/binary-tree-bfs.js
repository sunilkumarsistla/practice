process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function node(data) {
    var self = this;
    self.data = data;
    self.left = null;
    self.right = null;
}

function BFS(root) {
	var q = [];
	function travelBFS(arr, start, len) {
		var newLen = 0, str = "";
		for(var i=start;i<start + len;++i) {
		    str += (arr[i].data + " ");
			if(arr[i].left) {
				q.push(arr[i].left);
				newLen++;
			}
			if(arr[i].right) {
				q.push(arr[i].right);
				newLen++;
			}
		}
        console.log(str);
	    if(len > 0) {
		    travelBFS(arr, start + len, newLen);
	    }
	}
	
	if(root){
		q.push(root);
		travelBFS(q, 0, 1);
	}
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
	BFS(formBinaryTree());
}

start();