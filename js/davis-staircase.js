process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
// https://www.hackerrank.com/challenges/ctci-recursive-staircase

function getPossibilitiesDP(n, m) {
    var lookup = new Array(n+1);
    lookup[0]=1;lookup[1]=1;lookup[2]=2;
    for(var i=3;i<=n;i++) {
        lookup[i] = lookup[i-1] + lookup[i-2] + lookup[i-3];
    }
    return lookup[n];
}


function main() {
    var s = [1,3,7];
    for(var a0 = 0; a0 < s.length; a0++){
        console.log(getPossibilitiesDP(s[a0]));
    }
}
main();