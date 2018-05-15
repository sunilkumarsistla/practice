process.stdin.resume();
process.stdin.setEncoding('utf8');

// sum pair from linked list
// https://www.geeksforgeeks.org/linked-list-pair-sum/

function node(d) {
    var self = this;
    self.data= d;
    self.next = null;
    
    self.addNode = function(n) {
        self.next = n;
        return self.next;
    }
}

var lu = [];
function checkForCouple(num, sum) {
    var hasNum = !!lu[sum-num];
    lu[num] = true;
    return hasNum;
}

function getSumPairs(list, sum) {
    var output = [];
    while(list) {
        if(checkForCouple(list.data, sum)) {
            output.push([sum-list.data, list.data]);
        }   
        list = list.next;
    }
    return output;
}

function main(){
    var list = new node(0), sum = 10;
    list.addNode(new node(2))
    .addNode(new node(5))
    .addNode(new node(7))
    .addNode(new node(4))
    .addNode(new node(6))
    .addNode(new node(10))
    .addNode(new node(20))
    .addNode(new node(-10));
    
    console.log(getSumPairs(list, sum));
}
main();


