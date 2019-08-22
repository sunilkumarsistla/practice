/**
 * @param {string} str
 * @return {number}
 * The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
 */
var myAtoi = function(str) {
    let i = 0;
    let lu = {};
    while(i < 10) {
        lu[i] = true;
        i++;
    }
    i=0;
    while(i < str.length && str[i] === ' ') { i++; }
    let num = 0; let sign = 1;
    if(str[i] === '-') {
        sign = -1; i++;
    } else if (str[i] === '+') { i++; }
    console.log(i);

    while(i < str.length && lu[str[i]]) {
        num = (num * 10) + parseInt(str[i]);
        ++i;
    }

    let maxInt = Math.pow(2, 31);
    num *= sign;

    if(num > maxInt-1) return maxInt-1;
    else if(num < -maxInt) return -(maxInt);
    else return num;
};

console.log(myAtoi("-91283472332"));