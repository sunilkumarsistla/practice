process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function node(data) {
    var self = this;
    self.data = data;
    self.left = null;
    self.right = null;
}

function getLevelOfNode(root, current, level) {
	if(root === null)
		return 0;
	if(current === root)
		return level;
	return getLevelOfNode(root.left, current, level + 1) || getLevelOfNode(root.right, current, level + 1);		
}

function getAllCousins(root, findMeNode) {	
	var cousins = [];
	function getCousins(rootNode, findMe, currLvl) {
		if(currLvl < 2) 
			return;
		else if (currLvl == 2) {
			if (rootNode.left == findMe || rootNode.right == findMe) {
				return;
			} else {
    			if (rootNode.left) cousins.push(rootNode.left.data);
    			if (rootNode.right) cousins.push(rootNode.right.data);
			}				
		} else if (currLvl > 2){				
			getCousins(rootNode.left, findMe, currLvl-1);
			getCousins(rootNode.right, findMe, currLvl-1);
		}
	}	
	
	var level = getLevelOfNode(root, findMeNode, 1);
	getCousins(root, findMeNode, level);	
	return cousins;
}

function start() {
	var root = new node(1);
    root.left = new node(2);
    root.right = new node(3);
    root.left.left = new node(4);
    root.left.right = new node(5);
    root.left.right.right = new node(15);
    root.right.left = new node(6);
    root.right.right = new node(7);
    root.right.left.right = new node(8);
	
	console.log(getAllCousins(root, root.left.right));
}

start();