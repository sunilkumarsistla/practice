process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
// https://www.geeksforgeeks.org/find-ith-index-character-in-a-binary-string-obtained-after-n-iterations/
function GetIthIteratedValForNByDP(dp, i, n) {
    if(i < 0 || n < 0) return "";
    if(dp[n][i]) return dp[n][i];
    
    var fi = n == '0' ? 0 : 1;
    var ci = fi ^ 1;
    
    for(var k=dp[0].length-1;k<i;k++) {
        dp[fi][k+1] = dp[fi][k] + dp[ci][k];
        dp[ci][k+1] = dp[ci][k] + dp[fi][k];
    }
    
    return dp[n][i];
}

function GetBinaryString(n) {
    return n.toString(2);
}

function TransformString(s) {
    var k = s.split("");
    var res = k.map(function(a){
        return (a === '0') ? '01' : '10';
    }).toString();
    
    return res.replace(/,/g, "")
}

function ProduceResultByDP(num, iter) {
    var str = GetBinaryString(num);
    var result = "";
    var dp = [['0'],['1']];
    for(var i=0;i<str.length;i++) {
        result += GetIthIteratedValForNByDP(dp, iter, str.charAt(i));
    }
    console.log(dp);
    return result;
}

function ProduceResultByRec(num, iter) {
    var str = GetBinaryString(num);
    for(;iter>0;iter--) {
        str = TransformString(str);
    }
    return str;
}

function Main() {
    console.log(ProduceResultByDP(5, 2));
    console.log(ProduceResultByRec(5, 2));
}
Main();


