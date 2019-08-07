process.stdin.resume();
process.stdin.setEncoding('utf8');

function readInput() {
    var stdin_input = "";
    process.stdin.on("data", function (input) {
        stdin_input += input;
    });
    process.stdin.on("end", function () {
       main(stdin_input.split(' ').map(Number));
    });
}
readInput();

// your code goes here
function main(input) {
    console.log(input.length - findOnes(0, input.length-1, input));
}

function findOnes(s, e, arr) {
    console.log(s, e);
    if(arr[s]) { console.log('found at start', s); return s; }
    if(!arr[e] || s > e) { console.log('not found till end', e); return e+1; }
    
    let midPoint = parseInt((s+e+1)/2);
    if(arr[midPoint] && !arr[midPoint-1]) {
        console.log('found at mid', midPoint);
        return midPoint;
    }
    if(!arr[midPoint] && arr[midPoint+1]) {
        console.log('found at mid next', midPoint);
        return midPoint+1;
    }
    if(arr[midPoint])
        return findOnes(s, midPoint-1, arr);
    return findOnes(midPoint+1, e, arr);
}