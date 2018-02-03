process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
// given a list of objects containing employee id and its manager id.
// tell how many reportees each emploee has


function getReporteesCount(m, lu, rc) {
    rc = rc || [];
    var sum = 0;
    if(rc[m] !== undefined) {
        sum = rc[m];
    } else if(lu[m] && lu[m].length > 0) {
        for(var i=0;i<lu[m].length;i++)
            sum += getReporteesCount(lu[m][i], lu, rc);
    }
    rc[m] = sum;
    return sum + 1;
}

function getLookup(pairs) {
    var lu = [];
    for(var i=0;i<pairs.length;i++) {
        lu[pairs[i].m] = lu[pairs[i].m] || [];
        if(pairs[i].m !== pairs[i].e) {
            lu[pairs[i].m].push(pairs[i].e);
        }
    }
    return lu;
}

function main() {
    
    var result = [];
    var pairs = getInput();
    var lu = getLookup(pairs);
    for(var i=0;i<lu.length;i++) {
        if(lu[i]) {
            getReporteesCount(i, lu, result);   
        }
    }
    for(i=0;i<result.length; i++) {
        if(result[i] !== undefined) {
            console.log(i, result[i]);
        }
    }
}
main();


function getInput() {
    return [
        {e: 0, m: 0},
        {e: 1, m: 0},
        {e: 2, m: 1},
        {e: 3, m: 2},
        {e: 4, m: 3},
        {e: 5, m: 4},
        {e: 8, m: 0}];
}