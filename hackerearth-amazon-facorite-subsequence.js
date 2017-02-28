//https://www.hackerearth.com/challenge/hiring/amazon-sde-ii-hiring-challenge/algorithm/favorite-subsequence/

var MOD = 1000000007;
function main(input) {
    //Enter your code here
    var i, aEnds = 0; bEnds = 0, cEnds = 0;
    for(i=0;i<input.length;i++) {
        if(input[i] === 'a') {
            aEnds = aEnds << 1;
            aEnds++;
            aEnds %= MOD;
        } else if(input[i] === 'b') {
            bEnds = bEnds << 1;
            bEnds += aEnds;
            bEnds %= MOD;
        } else if(input[i] === 'c') {
            cEnds = cEnds << 1;
            cEnds += bEnds;
            cEnds %= MOD;
        }
    }
    console.log(cEnds);
}

