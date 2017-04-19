process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
  
function isPrime(n) {
    if(n<=1) return false;
    if(n<=3) return true;
    if((n&1)===0 || n%3 === 0) return false;
    
    for (var i=5; i*i<=n; i=i+6)
        if (n%i === 0 || n%(i+2) === 0)
           return false;
    return true;
}


function main() {
    for(var a0 = 0; a0 < 500; a0++){
        console.log(a0, isPrime(a0) ? "Prime" : "Not prime");
    }
}
  
main();