process.stdin.resume();
process.stdin.setEncoding('utf8');

function readInput() {
    var stdin_input = "";
    process.stdin.on("data", function (input) {
        stdin_input += input;
    });
    process.stdin.on("end", function () {
       main(stdin_input);
    });
}
readInput();

// given n cards facing up(1)/down(0) removing a facing up card flips adjacent cards.
// find if all cards can be removed
// removed card positions cannot be occupied
// https://www.codechef.com/AUG19B/problems/CHEFDIL
// your code goes here
function main(input) {
    input = input.split('\n');
    let noOfTests = parseInt(input[0]);
    for(let i=0;i<noOfTests;++i) {
        console.log(canWin(input[i+1].split('').map(Number)));
    }
}

function canWin(arr) {
    let totalCardCount = arr.length;
    while(totalCardCount > 0 && canFlipCards(arr)) {
        for(var i=0;i<arr.length;i++) {
            if(removeCard(i, arr)) {
                totalCardCount--;
            }
            //console.log(i, arr, totalCardCount);
        }
    }
    return totalCardCount > 0 ? 'LOSE' : 'WIN';
}

function removeCard(i, arr) {
    if(arr[i] <= 0) return false;
    arr[i] = -1;
    flipCard(i-1, arr);
    flipCard(i+1, arr);
    //console.log('removed', i, arr);
    return true;
}

function flipCard(i, arr) {
    if(i<0 || i>= arr.length || arr[i] === -1) return;
    arr[i] = (arr[i] === 0) ? 1 : 0;
}

function canFlipCards(arr) {
    for(let i=0;i<arr.length;i++)
        if(arr[i] === 1)
            return true;
    return false;
}