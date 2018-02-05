process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
// find the shortest range that contains atleast 1 number from list of k positive integer arrays
const MAX_ARR_COUNT = 20;
const MAX_ITEMS_COUNT = 50;
const MAX_ITEM_VALUE = 100;

function getRandomNumber(max) {
    return Math.round(Math.random() * max) || 1;
}

function printArr(arr) {
    console.log(arr.toString());
}

function intSort(a, b) {
    return a-b;
}

function pointSort(a, b) {
    return a.data-b.data;
}

function getMinArrData(arr) {
    return arr.map(function(a){return a.data;});
}

function serMinArrData(a) {
    return [a.data, a.ai, a.di].toString();
}

function getMinArrDataIndex(arr) {
    return arr.map(serMinArrData);
}

function getInput() {
    var lists = [];
    var k = getRandomNumber(MAX_ARR_COUNT);
    
    for(var i=0;i<k;i++) {
        var list = [];
        var clc = getRandomNumber(MAX_ITEMS_COUNT);
        for(var j=0;j<clc;j++) {
            list.push(getRandomNumber(MAX_ITEM_VALUE));
        }
        lists.push(list.sort(intSort));
    }
    return lists;
}

// implementation
function getInitialSortedArray(lists) {
    var arr = lists.map(function(l, i){
        return { ai:i, data: l[0], di: 0};
    }).sort(pointSort);
    return arr;
}

function getRange(MIN_ARR) {
    return {
        min: MIN_ARR[0].data,
        max: MIN_ARR[MIN_ARR.length - 1].data
    }
}

function updateMinArr(arr, ele) {
    arr.shift();
    arr.push(ele);
    arr.sort(pointSort);
}

function compareRange(a, b) {
    return Math.abs(a.min-a.max) -
        Math.abs(b.min-b.max);
}

function getShortestRange(lists) {
    var MIN_ARR = getInitialSortedArray(lists); 
    var range, currMin, minR;
    currMin = MIN_ARR[0];
    range = minR =  getRange(MIN_ARR);
    //console.log(MIN_ARR.map(serMinArrData));
    while(lists[currMin.ai].length > (currMin.di +1)) {
        updateMinArr(MIN_ARR, {data: lists[currMin.ai][currMin.di+1], ai: currMin.ai, di: currMin.di+1});
        
        range = getRange(MIN_ARR);
        currMin = MIN_ARR[0];
        if(compareRange(range, minR) < 0) {
            minR = range;
        }
        //console.log(MIN_ARR.map(serMinArrData), range, '-', minR);
    }
    
    return minR;
}

function getStaticInput() {
    return [
        [4,9],
        [1,4,9,10],
        [8,9],
        [9,10]
        ];
}

// invoker
function main() {
    var input = getInput();
    console.log('Input');
    console.log(input.map(function(a){ return a.toString(); }));
    var range = getShortestRange(input);
    console.log('Output');
    console.log(range);
}
main();