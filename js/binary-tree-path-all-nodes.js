process.stdin.resume();
process.stdin.setEncoding('utf8');

// find all paths to all nodes in a bin-tree
// your code goes here

function node(key) {
    var self = this;
    this.key = key;
    this.left = null;
    this.right = null;
}

function full_dfs(root, p, paths) {
    if(!root) return false;
    
    p.push(root.key);
    paths[root.key] = paths[root.key] || [];
    paths[root.key].push(JSON.parse(JSON.stringify(p)));
    
    full_dfs(root.left, p, paths) || full_dfs(root.right, p, paths);
    
    p.pop();
    return false;
}

function getAllNodePaths(root) {
    if(!root) return "No nodes present";
    var paths = {};
    full_dfs(root, [], paths);
    return paths;
}

(function main(){
    var root = new node(1);
    root.left = new node(2);
    root.right = new node(3);
    root.left.left = new node(4);
    root.left.right = new node(5);
    root.right.left = new node(6);
    root.right.left.left = new node(4);
    root.right.right = new node(7);
    console.log(getAllNodePaths(root));
}());


