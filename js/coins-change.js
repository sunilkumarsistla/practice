function getChangeCombs(coins, m, amount) {
	if(amount == 0) return 1;
	if(amount < 0 || (m === 0 && amount > 0)) return 0;
	return getChangeCombs(coins, m-1, amount) +  getChangeCombs(coins, m, amount-coins[m-1]);
}

function getChangeCombsDp(coins, m, amount) {
	var lookup = new Array(amount+1), i=0, j=0;
	lookup[0]=1;
	for(var i=1;i<=amount; ++i)
		lookup[i]=0;
	
	for(i=0;i<m;++i) 
		for(j=coins[i];j<=amount;++j)
			lookup[j] = lookup[j] + lookup[j-coins[i]];

	return lookup[amount];
}

getChangeCombsDp([1,2,3], 3, 30);
getChangeCombs([1,2,3], 3, 30);