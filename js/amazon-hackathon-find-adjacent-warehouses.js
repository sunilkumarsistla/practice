/*
Too many Kindles!
Amazon transportation deals with two types of businesses:

Procurement: Items are procured from vendors
Delivery: After customers have placed their orders, the relevant items are transported from our warehouses to customers
Amazon Kindle, our flagship book-reading device, is kept at multiple warehouses across the country for faster delivery.

Assume that all the warehouses are equidistant from the customer.

Amazon wants to find the stack rank of the warehouses with respect to the availability of Kindle devices. To accomplish this, our systems require the following information:

Given a warehouse W, find the following:

N warehouses that are above warehouse W in the stack rank
M warehouses that are below warehouse W in the stack rank
As Kindles are delivered from each warehouse, there is a stream of updates on increment (procurement) or decrement (delivery) on Kindles in a particular warehouse.

For this question, let's assume that there are only increments.

You are required to do the following:

Given {W, N, M} get list of N + M + 1 warehouses where:

First N warehouses are just above the warehouse_id that is based on the availability of Kindle in the warehouses
N+1th warehouse is warehouseid W
Last M warehouses are just below warehouse_id
Input

The first line contains T, which indicates the number of queries
The following T lines maybe of the given two types :

1 W N where W represents the warehouse ID and N represents the procurement (increment) of Kindles for that particular warehouse

2 W N M where W represents the warehouse ID. N represents the number of warehouses above, and M represents the number of warehouses below which you have to answer

Output

For each query of type 2, print all the N+M+1 warehouses as per the problem statement

In a case where the warehouse_id does not exist, print -1

Note

In a case where there are less than N warehouses above and M warehouse below, print how much ever warehouses are available for the query.

If any two warehouses have same score, warehouse with the smaller warehouse_id is ranked first.

Constraints

1 <= T <= 100000

1 <= W <= 1000

1 <= N <= 1000

1 <= M <= 1000

Sample Input
10
2 1 39 1
2 1 39 1
2 1 39 1
1 808 381
2 808 39 1
1 131 966
2 808 39 1
1 952 923
1 860 343
1 579 58

*/


function main(input) {
    input = input.split("\n");
    var nQ = parseInt(input[0]);
    var wH = new wareHouse();
    var q;
    for(var i=1;i<=nQ;i++) {
        q = input[i].split(" ").map(Number);
        if(q[0] === 1) {
            wH.procure(q[1], q[2]);
        } else if(q[0] === 2) {
            wH.dispatch(q[1], q[2], q[3]);
        }
    }
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

Array.prototype.pushCheckValid = function(a){
    if(a !== undefined) {
        this.push(a);
    }
}

function merge(arr, l, m, r)
{
    var temp, i, j, k;
    var L = [], R = [];
    for(i=l;i<=m;i++){ 
        L.push(arr[i]);
    }
    for(j=m+1;j<=r;j++){ 
        R.push(arr[j]);
    }
    i=0, j=0, k=l;
    while(i<L.length && j<R.length) {
        if(L[i].c<=R[j].c && L[i].id<R[j].id) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while(i<L.length) {
        arr[k]=L[i];
        k++;
        i++;
    }
    while(j<R.length) {
        arr[k]=R[j];
        k++;
        j++;
    }
}

function mergeSort(arr, l, r)
{
    if (l < r)
    {
        var m = parseInt(l+(r-l)/2);
        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r); 
        merge(arr, l, m, r);
    }
}

function binarySearch(arr, min, max, i) {
    console.log(arr, min, max, i);
    if(min > max) {
        console.log("e");
        return -1;
    }
    var mid = Math.floor((min+max) / 2);
    
    if (arr[mid] === i) {
        console.log("f");
        return mid;
    } else if (arr[mid] < i) {
        console.log("g");
        if(min==mid) 
            mid++;
        return binarySearch(arr, mid, max, i);
    } else if (arr[mid] > i) {
        console.log("l");
        if(max==mid)
            mid--;
        return binarySearch(arr, min, mid, i);
    }
        console.log("ex");
    return -1;
}

// my lib
function wareHouse() {
    var self = this;
    var whRepo = new Array(1000);
    
    self.procure = function (id, count) {
        //console.log(id,count);
        if(whRepo[id] === undefined){
            whRepo[id] = 0;
        }
        whRepo[id] = whRepo[id] + count;
    };
    
    self.dispatch = function(id, lW, gW) {
        //console.log(id,lW,gW);
        if(whRepo[id] === undefined) {
            console.log(-1);
            return;
        }
        var x, min, max, pBack = [];
        for(x = 0; x < whRepo.length; x++){
            if(whRepo[x] !== undefined)
                pBack.push({id: x, c: whRepo[x]});
        }
        mergeSort(pBack, 0, pBack.length-1);
        index = -1;
        for(x=0;x<pBack.length && index < 0;x++) {
            if(pBack[x].c === whRepo[id] && id === pBack[x].id) {
                index = x;
            }
        }
        if(index === -1) {
            console.log(-1);
            return;
        }
        min = index-lW;
        if(min < 0) {
            min=0;
        }
        max = index+gW;
        if(max >= pBack.length) {
            max = pBack.length - 1;
        }
        for(x=min; x <= max; x++) {
            console.log(pBack[x].id);
        }
    };
}
