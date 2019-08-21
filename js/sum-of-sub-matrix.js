var getSumOfSubMatrix = function(s, k) {
    if(k > s.length || k > s[0].length) return;
    if (k === 1) return s;
    let cumMat = [];
    let rowMat = [];

    for(let i=0; i < s.length; ++i) {
        let sum = 0;
        for(let j=0; j < k; ++j) {
            sum += s[i][j];
        }
        cumMat[i] = [sum];
        for(j=k; j < s[i].length;++j) {
            sum = sum + s[i][j] - s[i][j-k];
            cumMat[i][j-k+1] = sum; 
        }
    }

    for(let i=0; i < cumMat[0].length; ++i) {
        let sum = 0;
        for(let j=0; j < k; ++j) {
            sum += cumMat[j][i];
        }
        rowMat[0] = [...(rowMat[0] || []), sum];
        for(j=k; j < s.length;++j) {
            sum = sum + cumMat[j][i] - cumMat[j-k][i];
            rowMat[j-k+1] = rowMat[j-k+1] ||[];
            rowMat[j-k+1][i] = sum; 
        }
    }
    
    return rowMat;
};



console.log(getSumOfSubMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 4));