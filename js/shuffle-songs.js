process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
// shuffle a given playlist of songs

function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function shuffle(arr) {
    for(var i=arr.length-1;i>0;i--) {
        swap(i, Math.round(Math.random()*i), arr);
    }
    return arr;
}

console.log(shuffle([1,2,3,4,5]));
console.log(shuffle([1,2,3,4,5]));
console.log(shuffle([1,2,3,4,5]));
console.log(shuffle([1,2,3,4,5]));
console.log(shuffle([1,2,3,4,5]));