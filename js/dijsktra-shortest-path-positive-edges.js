process.stdin.resume();
process.stdin.setEncoding('utf8');

function getArrStr(arr) {
    var s = "[";
    for(var i=0;i<arr.length;i++) {
        s+=arr[i] + " ";
    }
    s = s.trim();
    s += "]";
    return s;
}

// your code goes here
function DijkstraSP(arr, si, n) {
    var spL = new Array(n);
    var spH = new Array(n);
    var spD = new Array(n);
    var i, j;
    for(i=0;i<n;i++) {
        spL[i] = Infinity;
        spH[i] = NaN;
        spD[i] = false;
    }
    spL[si] = 0;
    spD[si] = true;
    spH[si] = -1;
    
    var sDN = 0, sD = Infinity;
    for(i=0;i<n;++i) {
        sDN = 0, sD = Infinity;
        for(j=0;j<n;j++) {
            if(sD > spL[j] && spD[j] === false) {
                sDN = j;
                sD = spL[j];
            }
        }
        spD[sDN] = true;
        for(j=0;j<n;j++) {
            if(spD[j] === false && arr[sDN][j] > 0 && spL[sDN] !== Infinity) {
                if(arr[sDN][j] + spL[sDN] < spL[j]) {
                    spL[j] = arr[sDN][j] + spL[sDN];
                    spH[j] = sDN;
                }
            }
        }
        console.log(i, sDN, sD, getArrStr(spL));
    }
    return { dist: spL, path: spH };
}


function main() {
    var arr = [ 
      [0, 4, 0, 0, 0, 0, 0, 8, 0],
      [4, 0, 8, 0, 0, 0, 0, 11, 0],
      [0, 8, 0, 7, 0, 4, 0, 0, 2],
      [0, 0, 7, 0, 9, 14, 0, 0, 0],
      [0, 0, 0, 9, 0, 10, 0, 0, 0],
      [0, 0, 4, 14, 10, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 1, 6],
      [8, 11, 0, 0, 0, 0, 1, 0, 7],
      [0, 0, 2, 0, 0, 0, 6, 7, 0]];
      
     var res = DijkstraSP(arr, 0, arr.length);
    console.log("Dist: " + getArrStr(res.dist) + "\nPath: " + getArrStr(res.path));
}
main();