/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let max = (s && s[0]) || "";
    for(let i=1; i<s.length; i++) {
        // odd phase
        let a=i-1, e=i+1;
        while(s[a] === s[e] && a >= 0 && e < s.length) {
            a--;
            e++;
        }
        a++; e--;
        if(a >= 0 && e < s.length && max.length < e-a+1) {
            max = s.substring(a, e+1);
        }

        // even phase
        a=i-1; e=i;
        while(s[a] === s[e] && a >= 0 && e < s.length) {
            a--;
            e++;
        }
        a++; e--;
        if(a >= 0 && e < s.length && max.length < e-a+1) {
            max = s.substring(a, e+1);
        }
    }
    return max;
};