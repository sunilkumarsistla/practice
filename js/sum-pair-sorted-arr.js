process.stdin.resume();
process.stdin.setEncoding('utf8');

// sum pair from linked list
// https://www.geeksforgeeks.org/find-pair-given-sum-sorted-singly-linked-without-extra-space/

function getSumPairs(list, sum) {
    var result = [];
    var mi=0, Mi = list.length-1;
    while(mi<Mi) {
        var ts = list[mi] + list[Mi];
        if(sum == ts) {
            result.push([list[mi], list[Mi]])
            mi++; Mi--;
        } else if(ts < sum) {
            mi++;
        } else {
            Mi--;
        }
    }
    
    return result;
}

function main(){
    var list = [3,6,7,8,9,10,11], sum = 17;
    console.log(getSumPairs(list, sum));
}
main();


