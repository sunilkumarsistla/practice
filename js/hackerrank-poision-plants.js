// https://www.hackerrank.com/challenges/poisonous-plants

function node(a) {
    var self = this;
    self.data = a;
    self.next = null;
    
    self.print = function() {
        var n = self;
        var s = "";
        while(n != null) {
            s += (n.data + " ");
            n = n.next;
        }
        console.log(s);
    }
}

function processData(input) {
    var i, root = null, current = null, pre = null, p1 = input.split("\n")[1].split(" ").map(Number), clr = false;
    for(i=p1.length-1;i>=0;--i) {
        if(current === null) {
            root = new node(p1[i]);
            current = root;
        } else {
            current.next = new node(p1[i]);
            current = current.next;
        }
    }
    var d = 0;
    while(!clr) {
        clr = true;
        current = root;
        pre = null;
        while(current !== null && current.next !== null) {
            if(current.data > current.next.data) {
                clr = false;
                if(pre === null) {
                    root = current.next;
                } else {
                    pre.next = current.next;
                }                
            } else {
                pre = current;
            }
            current = current.next;
        } 
        //root.print();
        ++d;
    }
    
    console.log(--d);
} 