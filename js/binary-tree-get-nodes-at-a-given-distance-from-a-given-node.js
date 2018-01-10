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
    return arr.map(function(a){return a.data;});
}

function getGraphFromTree(arr, graph) {
    if(!arr || !arr.length) return graph;
    
    graph = graph || [];
    var len = arr.length;
    var n = arr.shift();
    graph[n.data] = graph[n.data] || [];
    for(var i=0;i<len;i++) {
        if(n.left) { 
            arr.push(n.left); 
            graph[n.left.data] = graph[n.left.data] || [];
            graph[n.data][n.left.data]=1;
            graph[n.left.data][n.data]=1;
        }
        if(n.right) { 
            arr.push(n.right); 
            graph[n.right.data] = graph[n.right.data] || [];
            graph[n.data][n.right.data]=1; 
            graph[n.right.data][n.data]=1; 
        }
    }
    return getGraphFromTree(arr, graph);
}

function bfs(map, keys, dist, visited) {
    if(!keys || !keys.length || dist === 0) return keys;
    visited = visited || [];
    //console.log(keys, dist, visited);
    var len = keys.length;
    for(var i=0;i<len;i++) {
        var key = keys.shift();
        visited[key] = 1;
        for(var j=0; map[key] && j < map[key].length;j++) {
            if(map[key][j] && !visited[j]) keys.push(j);
        }
    }
    //console.log('e', keys, dist, visited);
    return bfs(map, keys, dist-1, visited);
}

function formBinaryTree() {	
    var root = new node(1);
    root.left = new node(2);
    root.left.left = new node(4);
    root.left.right = new node(5);
    root.right = new node(3);
    root.right.right = new node(6);
    return root;
}

function start() {
        for(var j=1;j<7;j++)
            for(var i=0; i<6;i++)
	        console.log(j, i, bfs(getGraphFromTree([formBinaryTree()]), [j], i));
}

start();