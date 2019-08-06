process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
// rotate a matrix by 90
// anagram 

function rotate(m) {
    var result = [];
    result.length = m[0].length;
    for(var i=0;i<result.length;i++) {
        result[i]=[];
        result[i].push([]);
    }
    for(var r=0;r<m.length;++r) {
        for(var c=0;c<m[0].length;++c) {
            result[c][r] = m[r][c];
        }
    }
    return result;
}

rotate([[1]]).forEach(x=>console.log(x));
rotate([[1,2]]).forEach(x=>console.log(x));
rotate([[1],[2]]).forEach(x=>console.log(x));
rotate([[1,2,3]]).forEach(x=>console.log(x));
rotate([[1],[2],[3]]).forEach(x=>console.log(x));
rotate([[1,2],[3,4]]).forEach(x=>console.log(x));
rotate([[1,2,3],[4,5,6]]).forEach(x=>console.log(x));
rotate([[1,2],[3,4],[5,6]]).forEach(x=>console.log(x));
rotate([[1,2,3],[4,5,6],[7,8,9]]).forEach(x=>console.log(x));