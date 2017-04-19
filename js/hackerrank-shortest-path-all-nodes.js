// https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach
// all the edges are unit equidistants

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

// Start From Here

function processData(input) {
    input = input.split("\n").map(function(a){return a.split(" ").map(Number);});
    var i, j, nq = input[0][0];
    var n, e, M;
    for(j=0, i=1;j<nq;j++) {
        n = input[i][0]; e = input[i][1];
        i++;
        M = getEmptyMatrix(n);
        while(--e >= 0){
            addEdge(M, input[i][0]-1, input[i][1]-1, 6); 
            i++;           
        }
        printDistances(getShortestPathMatrix(M, input[i][0]-1), input[i][0]-1);
        i++;
    }
} 

function getEmptyMatrix(n) {
    var m = new Array(n), k = new Array(n);;
    for(var i=0;i<n;i++)
        m[i] = -1;
    for(var i=0;i<n;i++) {
        k[i] = m.slice(0); 
        k[i][i] = 0;        
    }   
    return k;
}

function addEdge(M, a, b, w) {
    M[a][b] = w; M[b][a] = w;
}

function printDistances(arr, n) {
    var s = "";
    for(var i=0;i<arr.length;i++) {
        if(i!==n)
            s += arr[i] + " ";
    }
    console.log(s.trim());
}

function getShortestPathMatrix(M, s) {
    var i, j, nLen = M.length, sPaths = new Array(nLen), cN;
    for(i=0;i<nLen;i++) {
        sPaths[i] = -1;
    }
    sPaths[s] = 0;
    var q = [s];
    while(q.length > 0) {
        cN = q.shift();
        for(i=0;i<nLen;i++) {
            if(M[cN][i] > 0 && sPaths[i] === -1) {
                q.push(i);
                sPaths[i] = sPaths[cN] + M[cN][i];
            }
        }
    }
    return sPaths;
}

