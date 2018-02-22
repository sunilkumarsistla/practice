process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
var MAX = Number.MAX_SAFE_INTEGER;
var MIN = Number.MIN_SAFE_INTEGER;
    
function heap(capacity) {
    var self = this;
    
    var data = [];
    
    function left(i) { return i*2 + 1; }
    function right(i) { return i*2 + 2; }
    function parent(i) { return parseInt((i-1)/2); }
    
    function swap(ai, bi) {
        if(ai === bi) return;
        
        let x = data[ai];
        data[ai] = data[bi];
        data[bi] = x;
    }
    
    self.insertKey = function(key) {
        var i = data.length;
        data.push(key);
        while (i !== 0 && data[parent(i)] > data[i])
        {
           swap(i, parent(i));
           i = parent(i);
        }
    };
    
    self.deleteKeyAtIndex = function(i) {
        var k = data.splice(i, 1);
        self.heapify(parent(i));
        return k;
    };
    
    self.getMin = function() {
        if(data.length === 0) 
            return MAX;
        return data[0];
    };
    
    self.extractMin = function() {
        if(data.length === 0) 
            return MAX;
        if (data.length === 1)
            return data.pop();
        
        let min = data.splice(0, 1, data.pop());
        self.heapify();
        return min[0];
    };
    
    self.getData = function() {
        return data;    
    };
    
    self.heapify = function(i = 0) {
        let l = left(i);
        let r = right(i);
        let si = i;
        
        if(l<data.length && data[l] < data[i])
            si = l;
        if(r<data.length && data[r]  < data[si])
            si = r;
        if(si != i) {
            swap(si, i);
            self.heapify(si);   
        }
    };
}

function main() {
    var h = new heap();
    h.insertKey(12);
    console.log(h.getData());
    h.insertKey(11);
    console.log(h.getData());
    h.insertKey(13);
    console.log(h.getData());
    h.insertKey(6);
    console.log(h.getData());
    h.insertKey(5);
    console.log(h.getData());
    h.insertKey(18);
    console.log(h.getData());
    
    console.log(h.extractMin(), h.getData());
    console.log(h.extractMin(), h.getData());
    console.log(h.extractMin(), h.getData());
    
    console.log(h.deleteKeyAtIndex(2), h.getData());
    
}

main();
