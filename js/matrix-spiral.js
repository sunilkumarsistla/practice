process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
// print an array in spiral form outer to inner.

function matrixSpiral(m) {
    var cs = 0, ce = m[0].length - 1, rs = 0, re = m.length - 1;
    var result = [], i;
    
    while(cs <= ce && rs <= re) {
        for(i=cs;i<=ce;++i) {
            result.push(m[rs][i]);
        }
        for(i=rs+1;i<re;++i) {
            result.push(m[i][ce]);
        }
        for(i=ce;i>=cs&&rs<re;--i) {
            result.push(m[re][i]);
        }
        for(i=re-1;i>rs&&cs<ce;--i) {
            result.push(m[i][cs]);
        }
        ++cs;--ce;--re;++rs;
    }
    return result;
}