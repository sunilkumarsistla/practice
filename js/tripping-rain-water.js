var compute = function(h) {
    let lb = [];
    let rb = [];
    let water = 0;

    if(h.length < 2) return 0;
    
    lb[0] = h[0];
    rb[h.length-1] = h[h.length-1];

    for(let i=1;i<h.length;++i) {
        lb[i] = Math.max(lb[i-1], h[i]);
        rb[h.length-i-1] = Math.max(rb[h.length - i], h[h.length-i-1]);
    }

    for(let i=0;i<h.length;i++) {
        water += Math.min(lb[i], rb[i]) - h[i];
    }

    return water;
}

var computeMinSpace = function(h) {
    let water = 0, n = h.length;
    let lm = h[0], rm = h[n-1];
    let l=0,r=n-1;
    while(l <= r) {
        if(h[l] < h[r]) {
            if(h[l] > lm) lm = h[l];
            water += lm - h[l];
            ++l;
        } else {
            if(h[r] > rm) rm = h[r];
            water += rm - h[r];
            --r;
        }
    }
    return water;
}

console.log(compute([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(computeMinSpace([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));