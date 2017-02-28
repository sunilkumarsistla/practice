// https://www.hackerearth.com/challenge/hiring/amazon-sde-ii-hiring-challenge/algorithm/game-of-xor/


function main(input) {
    input = input.split('\n').map(function(a){return a.split(' ').map(Number);});
    var length, i, arr, result;
    for(i=1;i<input.length;i++) {
        length = input[i][0]; i++;
        arr = input[i];
        console.log(getXOR(length, arr));
    }
}

function getXOR(length, arr) {
    var res = 0, i, n, r;
    
    for(i=0;i<length;i++) {
        n = length-i;
        r = (i%length)+1;
        if((n&r&1)===1) {
            res ^= arr[i];
        }
    }
    return res;
}