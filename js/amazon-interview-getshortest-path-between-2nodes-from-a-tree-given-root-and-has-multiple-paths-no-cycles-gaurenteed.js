process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

function node(val) {
    var self = this;
    self.value = val;
    self.children = [];
    
    self.addChild = function (n) {
        self.children.push(n);    
    };
}

function GetArrStr(arr) {
    var res = "";
    for (var i = 0; i < arr.length; i++) {
        res += arr[i] + " ";
    }
    return res.trim();
}

function GetClonedArray(arr) {
    var res = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        res[i] = arr[i];
    }
    return res;
}

function GetShortestPathBetweenNodes(root, id1, id2) {
    if(!root) return null;
    if(id1 == id2) return [id1];
    var paths = [];
    
    function GetDirectPathFromIndividualRootPaths(p1, p2) {
        var pi =  0, pj = 0, length = Math.min(p1.length, p2.length);
        if(length === 0) return null;
        for (pi = 0; pi < length; pi++) {
            if(p1[pi] !== p2[pi])
                break;
        }
        var res = [];
        for (pj = p1.length - 1; pj >= pi; pj--) {
            res.push(p1[pj]);
        }
        for (; pj < p2.length; pj++) {
            res.push(p2[pj]);
        }
        return res;
    }
    
    function GetShortestPath(pL, a, b) {
        if(!pL.hasOwnProperty(a) || !pL.hasOwnProperty(b)) return null;
        
        var i,j, minDist = Infinity, path = null, tpath = null;
        for(i = 0; i< pL[a].length; i++) {
            for(j = 0; j< pL[b].length; j++) {
                tpath = GetDirectPathFromIndividualRootPaths(pL[a][i], pL[b][j]);
                if(tpath.length < minDist) {
                    path = tpath;
                    minDist = tpath.length;
                }
            }   
        }
        return path;
    }
    
    function TrackPath(n, a, b, cp) {
        cp.push(n.value);
		paths[n.value] = paths[n.value] || [];
        paths[n.value].push(GetClonedArray(cp));
        for(var i=0;i<n.children.length; i++) {
            TrackPath(n.children[i], a, b, cp);   
        }
        cp.pop();
    }
    TrackPath(root, id1, id2, []);
    var shortestPath = GetShortestPath(paths, id1, id2);
	    
    return GetArrStr(shortestPath);
}

function main() {
    var i;
	var node1 = new node(1);
	var node2 = new node(2);
	var node3 = new node(3);
	var node4 = new node(4);
	var node5 = new node(5);
	var node6 = new node(6);
	var node7 = new node(7);
	var node8 = new node(8);
	var node9 = new node(9);
	var node10 = new node(10);
	var node11 = new node(11);
	var node12 = new node(12);
	var node13 = new node(13);	
	
	node1.addChild(node2);
	node1.addChild(node3);
	node1.addChild(node4);
	
	node2.addChild(node5);
	node2.addChild(node6);
	node3.addChild(node7);
	node3.addChild(node8);
	node4.addChild(node8);
	node4.addChild(node9);
	
	node5.addChild(node10);
	node6.addChild(node10);	
	node7.addChild(node11);
	node8.addChild(node11);
	node8.addChild(node12);
	node9.addChild(node13);
	node9.addChild(node12);
	
	node12.addChild(node13);		
    var id1 = 10, id2 = 13;
    console.log(id1 + " to " + id2 + ": " + GetShortestPathBetweenNodes(node1, id1, id2));
    id1= 11;
    console.log(id1 + " to " + id2 + ": " + GetShortestPathBetweenNodes(node1, id1, id2));
    
}
main();