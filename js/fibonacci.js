// find the nth fibonacci value

function fibonacci() {
    var self = this;
    var a, b, c, d, MOD = 1000000007;
    self.getFibonicci = function(n, ans) {
        if (n === 0) {
            ans[0] = 0; ans[1] = 1;
            return;
        }
        self.getFibonicci(Math.floor(n/2), ans);
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
}

function main(input) {
    var n = parseInt(input);
    var fibHelper = new fibonacci();
    var a = [0, 0];
    fibHelper.getFibonicci(n, a);
    console.log(a[0]);
} 