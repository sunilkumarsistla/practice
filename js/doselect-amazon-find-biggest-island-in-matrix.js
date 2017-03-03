var rMin = 0, cMin = 0, rMax, cMax, M, allow = '.', deny = '*';
var temp = 0, maxA = 0;

var rIndex = [-1, -1, -1,  0, 0,  1, 1, 1];
var cIndex = [-1,  0,  1, -1, 1, -1, 0, 1];


function isSafe(matrix, row, col)
{
    return (row >= rMin) && (row < rMax) &&     
           (col >= cMin) && (col < cMax) &&      
           (matrix[row][col] !== deny); 
}

function  DFS(matrix, row,col)
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

function main(input) {
    var t = (input[0]).split(" ").map(Number);
    cMax = t[0];
    rMax = t[1];
    var i,j;
    M = [];
    
    for(i=rMin;i<rMax;i++) {
        M.push(input[i+1].split(''));
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
    console.log(maxA);
}

// Read the variable from STDIN
process.stdin.on('data', function(chunk) {
    main(chunk.toString().split("\n"));
})

