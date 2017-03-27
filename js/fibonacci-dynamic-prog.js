function fibonacci(n) {
	var lookup = new Array(n+1);

	function getFib(i) {
		if(lookup[i] === undefined) {
			if(i < 2) {
				lookup[i] = i;
			} else {
				lookup[i] = getFib(i-1) +  getFib(i-2);
			}
		}
		return lookup[i];
	}
	return getFib(n);
}