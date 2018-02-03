process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function bfs(graph, arr, res) {
    var length = arr.length;
    res = res || initiateDistArr(graph[0].length);
    if(length === 0) return;
    for(var i=0;i<length;i++) {
        res[i] = res[i] || [arr[0]];
        for(var j=0;j<graph.length;j++) {
            if(graph[arr[0]][j] && !res[j] && arr[0] !== j) {
                arr.push(j);
                res[j] = duplicateArr(res[arr[0]]);
                res[j].push(j);
            }
        }
        arr.shift();
    }
    return bfs(graph, arr, res);
}
function initiateDistArr(len) {
    return new Array(len);
}
function duplicateArr(arr) {
    return arr.toString(",").split(",").map(Number);
}
(function(){
    var graph = [
    [0,1,0,0,0],
    [1,0,1,1,0],
    [0,1,0,1,0],
    [0,1,1,0,1],
    [0,0,0,1,0]];
    var arr = [0];
    var res = initiateDistArr(graph[0].length);
    bfs(graph, arr, res);
    console.log(res);
}());