process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
// https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid

function getMaxIslandSize(M, rMax, cMax, allow, deny) {
    var rMin = 0, cMin = 0;
    var temp = 0, maxA = 0;
    var rIndex = [-1, -1, -1,  0, 0,  1, 1, 1];
    var cIndex = [-1,  0,  1, -1, 1, -1, 0, 1];

    function isSafe(matrix, row, col)
    {
        return (row >= rMin) && (row < rMax) &&     
               (col >= cMin) && (col < cMax) &&      
               (matrix[row][col] !== deny); 
    }

    function  DFS(matrix, row, col)
    {
        if(matrix[row][col] === allow){
            ++temp;
        }
        matrix[row][col] = deny;
        for (var k = 0; k < 8; ++k)
            if (isSafe(matrix, row + rIndex[k], col + cIndex[k])) {
                DFS(matrix, row + rIndex[k], col + cIndex[k]);
            }
    }

    for(i=rMin;i<rMax;i++) {
        for(j=cMin;j<cMax;j++) {
            if (isSafe(M, i, j))
            {             
                temp = 0;
				DFS(M, i, j);
                maxA = maxA > temp ? maxA : temp;  
            }
        }   
    } 
    return maxA;
}


function main() {
    var grids = [{ r: 4, c: 4, m: [[1,1,0,0],[0,1,1,0],[0,0,1,0],[1,0,0,0]] },
    { r: 5, c: 4, m: [[0,0,1,1],[0,0,1,0],[0,1,1,0],[0,1,0,0],[1,1,0,0]] }
    ];
    
    for(var i=0;i<grids.length;i++)
        console.log(getMaxIslandSize(grids[i].m, grids[i].r, grids[i].c, 1, 0));
}
main();
