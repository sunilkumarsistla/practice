process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
// run length encoding
// https://www.geeksforgeeks.org/run-length-encoding/

function encode(input) {
    var output = "";
    if(!input) return output;
    
    let currCnt = 1;
    output = input.charAt(0);
    for(let i=1;i<input.length;i++) {
        if(output.charAt(output.length - 1) === input.charAt(i))
            currCnt++;
        else {
            output += (currCnt > 1 ? currCnt : "") + input.charAt(i);
            currCnt = 1;
        }
    }
    if(currCnt > 1) output += currCnt;
    
    return output;
}

function isChar(str, i) {
    return (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 121);
}

function getNumber(str, si, ei) {
    if(si < 0) return 0;
    
    var output = parseInt(str.substr(si+1, ei-si+1));
    return isNaN(output) ? 1 : output;
}

function decode(input) {
    var output = "";
    if(!input) return output;
    if(!isChar(input, 0)) return "corrupted input";
    
    for(var i=0, ei=0; i<input.length; i++) {
        ei = i;
        while(!isChar(input, i+1) && i<input.length) {
            i++;
        }
        var times = getNumber(input, ei, i);
        for(var j=0;j<times;j++) {
            output += input.charAt(ei);
        }
    }
    
    return output;
}

function main(){
    console.log(encode("aaaaaabb"));
    console.log(decode("6b2"));
    
    console.log(encode("aaaaabccc"));
    console.log(decode("a5bc3"));
}
main();


