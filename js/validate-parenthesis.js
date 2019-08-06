process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
// validate parenthesis

function validateParanthesis(str) {
    var s = [];
    var lu = {
        ']': '[',
        '}': '{',
        ')': '('
    };
    var validP = {
        ']': true,
        '}': true,
        ')': true,
        '[': true,
        '{': true,
        '(': true
    };
    
    for(var i=0;i<str.length;++i) {
        if(!validP[str[i]]) continue;
        if(s.length === 0 && lu.hasOwnProperty[str[i]])
            return false;
        if(s.length > 0 && lu[str[i]] === s[s.length-1]) {
            s.pop();
            continue;
        }
        s.push(str[i]);
    }
    
    return s.length === 0;
}

var input='';
console.log(input='', validateParanthesis(input));
console.log(input='()', validateParanthesis(input));
console.log(input='[]', validateParanthesis(input));
console.log(input='{}', validateParanthesis(input));
console.log(input='{([])}', validateParanthesis(input));
console.log(input='([])', validateParanthesis(input));
console.log(input='{[]}', validateParanthesis(input));
console.log(input='{[]}}', validateParanthesis(input));
console.log(input='{[(]}', validateParanthesis(input));
console.log(input='}', validateParanthesis(input));
console.log(input='[]}', validateParanthesis(input));
console.log(input='({})[]', validateParanthesis(input));
console.log(input='([{}(){}])[]', validateParanthesis(input));