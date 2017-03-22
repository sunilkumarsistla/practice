
Array.prototype.dequeue = function () {
    return this.splice(0, 1)[0];
}

Array.prototype.push_back = function (a) {
    this.splice(0, 0, a);
}

Array.prototype.enqueue = function (a) {
    this.push(a);
}

function node(id) {
    var self = this;
    self.id = id; 
    self.children = [];
}

function Graph(n) {
    var self = this;
    self.vertexCount = n;
    self.vertices = new Array(self.vertexCount+1);
    
    self.addBranch = function(v1, v2) {
        self.vertices[v1] = self.vertices[v1] || [];
        self.vertices[v2] = self.vertices[v2] || [];
        
        self.vertices[v1].push(v2);
        self.vertices[v2].push(v1);
    };
    
    self.getAllDistancesFromVertex = function(v) {
        var q = [], dist = new Array(self.vertexCount + 1);
        var front, i, children;
        q.enqueue(v);
        dist[v] = 0;
        while(q.length > 0) {
            front = q.dequeue();
            children = self.vertices[front];
            console.log(q, front, children);
            for(i=0;i<children.length;i++) {
                if(dist[children[i]] === undefined) {
                    q.enqueue(children[i]);
                    dist[children[i]] = dist[front] + 1;
                }
            }
        }
        return dist;
    };
    
    self.print = function() {
        console.log(self.vertices);
    };
}

function main(input) {
    //Enter your code here
    input = input.split("\n").map(function(a){ return a.split(" ").map(Number); });
    var i, tree = new Graph(input[0][0]);
    for(i=1;i<tree.vertexCount;i++) {
        tree.addBranch(input[i][0], input[i][1]);
    }
    console.log(tree.getAllDistancesFromVertex(2));
    /*for(i=1;i<=tree.vertexCount;i++) {
        console.log(tree.getAllDistancesFromVertex(i));
    }*/
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});

