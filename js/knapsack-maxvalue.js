function max(a, b) {
	return a > b ? a : b;
}

function knapSackRec(ws, vs, mw, n) {
	if(mw == 0 || n == 0) return 0;
	if(ws[n-1] > mw) return knapSackRec(ws, vs, mw, n-1);
	return max(vs[n-1] + knapSackRec(ws, vs, mw - ws[n-1], n-1), knapSackRec(ws, vs, mw, n-1));
}

function knapSackDp(weights, values, maxWeight, count) {
	var i, j, lookup = new Array(count+1);
	for(j=0;j<=count;j++) {
		lookup[j] = new Array(maxWeight+1);
		lookup[j][0]=0;
	}
	for(j=0;j<=maxWeight;j++) {
		lookup[0][j] = 0;
	}
	for(i=1;i<=count;i++) {
		for(j=1;j<=maxWeight;j++) {
			if(i==0 || j==0) 
				lookup[i][j] = 0;
			else if (weights[i-1] <= j) 
				lookup[i][j] = max(values[i-1] + lookup[i-1][j-weights[i-1]], lookup[i-1][j]);
			else 
				lookup[i][j] = lookup[i-1][j];
		}
	}
	for(j=0;j<=count;j++) 
		console.log(lookup[j]);	
	return lookup[count][maxWeight];
}

knapSackRec([1, 2, 3], [3, 5, 6], 5, 3);
knapSackDp([1, 2, 3], [3, 5, 6], 5, 3);
