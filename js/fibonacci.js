// find the nth fibonacci value

function fibonacci(n) {
	var arr = [0, 0], MOD = 1000000007;
    function getFibonicci(n, ans) {
		var a, b, c, d;
        if (n === 0) {
            ans[0] = 0; ans[1] = 1;
            return;
        }
        getFibonicci(Math.floor(n/2), ans);
        a = ans[0]; b = ans[1]; c = (b << 1) - a;
        if(c < 0) {
            c += MOD;
        }
        c = (a * c) % MOD; d = (a*a + b*b) % MOD; 
        if((n&1) === 0) {
            ans[0] = c; ans[1] = d;
        } else {
            ans[0] = d; ans[1] = c + d;
        }
    }
	getFibonicci(n, arr);
	return arr[0];
}

function main(n) {
    var res = fibonacci(n);
    console.log(res);
} 