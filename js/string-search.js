process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function getArrStr(arr) {
    var res = "";
    for(var i=0;i<arr.length;++i)
        res += arr[i] + " ";
    return res.trim();
}

function KMPSearch(text, pattern) {
    var pLen = pattern.length, tLen = text.length;
    var lu = new Array(pLen), indexes = [];
    var i = 1, j = 0;
    lu[0] = 0;
    while(i < pLen) {
        if(pattern[i] == pattern[j]) {
            lu[i++] = ++j;
        } else if(j === 0) {
            lu[i++] = 0;
        } else {
            j = lu[j-1];
        }
    }
    i = 0; j = 0;
    while(i < tLen) {
        if (pattern[j] === text[i]) {
            ++j; ++i;
        }
        if(j === pLen) {
            indexes.push(i-j);
            j = lu[j-1];
        } else if(j < tLen && pattern[j] !== text[i]) {
            if (j !== 0) j = lu[j-1];
            else ++i;
        }
    }
    return { lu: lu, res: indexes };
}

function main() {
    var text = "ABABDABABCABABCABAB", pat = "ABABCABAB";
    var res = KMPSearch(text, pat);
    console.log("lookup: " + getArrStr(res.lu) + "\nindexes: " + getArrStr(res.res));
}
main();