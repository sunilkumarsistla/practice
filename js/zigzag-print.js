var convert = function(s, numRows) {
    if(s.length <= 1 || numRows <= 1) return s;
    let res = [], dup_arr=[];
    for(let i=0; i < Math.ceil(s.length/numRows)*2-2;++i) {
		dup_arr[i]= " ";
    }
    for(let i=0;i<numRows;i++) {
        res[i] = [...dup_arr];
    }


    let i=0, r=0, c=0;
    while(i < s.length) {
        r = 0;
        while(r < numRows) {
            res[r][c] = s[i] || " ";
            ++r;
            ++i;
        }
        --r;
        --i;
        while(r >= 0) {
            res[r][c] = s[i] || " ";
            --r;
            ++c;
            ++i;
        }
        --c;
        --i;
    }

    return res.map(r => r.reduce((a, b) => ((a||'') + " " + (b||'')), "").trim()).join("\n");
};