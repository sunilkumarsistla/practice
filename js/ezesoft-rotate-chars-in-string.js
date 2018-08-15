process.stdin.resume();
process.stdin.setEncoding('utf8');

// code 
function RollTheString(s, roll) {
    var si = new Array(s.length);
    for(let i =0; i < s.length; i++)
        si[i] = 0;
    
    for(let i=0;i<roll.length;i++)
        si[roll[i]-1]++;
    
    for(let i=si.length-2;i>=0;i--)
        si[i] = si[i] + si[i+1];
    
    return shiftString(s, si);
}

function shiftString(s, si) {
    var k = "";
    for(let i =0; i < s.length; i++)
        k += String.fromCharCode(getShiftIndex(s.charCodeAt(i), si[i]));
    return k;
}

function getShiftIndex(i, s) {
    return ((i - 97 + s) % 26) + 97;
}

// code ends

function main() {
    var tests = [
    {s: "abz", r: [3], ans: "bca" },
    {s: "vwxyz", r: [1, 2, 3, 4, 5], ans: "aaaaa" },
    {s: "vgxgpuamkx", r: [5,5,2,4,7,6,2,2,8,7], ans: "fqenvydnkx" },
    ];
    
    for(var i=0;i<tests.length;i++){
        let o = RollTheString(tests[i].s, tests[i].r);
        console.log( (o == tests[i].ans) ? "pass": "fail", ":", 
        tests[i].s, 
        "[" + tests[i].r.toString() + "]", 
        o);
    }
}

main();