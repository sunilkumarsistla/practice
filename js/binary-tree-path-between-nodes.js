process.stdin.resume();
process.stdin.setEncoding('utf8');

// find the shortest distance between 2 nodes in a bin-tree
// your code goes here

function node(key) {
    var self = this;
    this.key = key;
    this.left = null;
    this.right = null;
}

function dfs(root, a, path) {
    if(!root) return false;
    
    path.push(root.key);
    
    if(root.key == a) {
        return true;
    } else if(dfs(root.left, a, path) ||dfs(root.right, a, path)){
        return true; 
    }
    path.pop();
    return false;
}

function dfs2(root, a, b, patha, pathb) {
    if(!root) return false;
    
    if(patha.length === 0 || patha[patha.length-1] !== a) 
        patha.push(root.key);
    if(pathb.length === 0 || pathb[pathb.length-1] !== b) 
        pathb.push(root.key);
    
    if(a === b && root.key == a) {
        return true;
    }
    
    if(patha[patha.length-1] === a && pathb[pathb.length-1] === b)
        return true;
    else if(dfs2(root.left, a, b, patha, pathb) || dfs2(root.right, a, b, patha, pathb)) {
        return true;
    }
    if(patha[patha.length-1] !== a) 
        patha.pop();
    if(pathb[pathb.length-1] !== b) 
        pathb.pop();
    return false;
}

function getPath(root, a) {
    var path = [];
    if(dfs(root, a, path)) {
        return path;
    }
    return 'Not Found';
}

function getDirectPath(pa, pb) {

    if(!pa || !pb || !pa.length || !pb.length){
        return "Not Found";
    }
    var i = 0;
    for(i = 0; i<pa.length && i<pb.length;i++) {
        if(pa[i]!=pb[i]){
            break;
        }
    }
    
    pa.splice(0, i);
    pb.splice(0, i-1);
    while(pa.length > 0) {
        pb.unshift(pa.shift());
    }
    
    return pb;
}

function getPaths(root, a, b) {
    var paths = [[],[]];
    if(dfs2(root, a, b, paths[0], paths[1])) {
        console.log(paths);
        return getDirectPath(paths[0], paths[1]);
    }
    return 'Not Found';
}

(function main(){
    var root = new node(1);
    root.left = new node(2);
    root.right = new node(3);
    root.left.left = new node(4);
    root.left.right = new node(5);
    root.right.left = new node(6);
    root.right.right = new node(7);
    console.log(getPaths(root, 0, 0));
}());


