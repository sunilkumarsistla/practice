process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
// find anagram groups in list of given words
// anagram 

function genKey(str) {
    str = str.toLowerCase();
    var hm = [];
    for(var i=0;i<str.length;i++) {
        hm[str.charCodeAt(i)] = (hm[str.charCodeAt(i)] || 0) + 1;
    }
    
    var res = '';
    for(i=97;i<123;i++) {
        if(!hm[i]) continue;
        res += String.fromCharCode(i) + (hm[i] > 1 ? hm[i] : '');
    }
    return res;
}

function getAnagrams(arr) {
    var dict = {}, key='';
    for(var i=0;i<arr.length;++i) {
        key = genKey(arr[i]);
        dict[key] = [...(dict[key]||[]), arr[i]];
    }
    
    var result = [];
    for(let a in dict) {
        result.push(dict[a]);
    }
    return result;
}


console.log(getAnagrams(['act','cat','tac','god','dog']));