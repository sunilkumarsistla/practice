function mergeSort(arr, func) {
	var comparator = func || function (a, b) {
		return a - b;
	};
	
	function merge(a, s_i, d_i, e_i) {
		var i, j, m_a = [];
		for(i=s_i, j=d_i+1;i<=d_i && j<=e_i;) {
			if(comparator(a[i], a[j]) > 0) {
				m_a.push(a[j]);
				j++;
			} else {
				m_a.push(a[i]);
				i++;
			}
			console.log(m_a, i, j, s_i, d_i, e_i);
		}
		for(;i<=d_i;i++) 
			m_a.push(a[i]);
		for(;j<=e_i;j++) 
			m_a.push(a[j]);
		
		for(j=0,i=s_i;i<=e_i;j++,i++) 
			a[i] = m_a[j];	
		console.log(m_a, a);	
	}
	
	function sort(a, s_i, e_i) {
		if(s_i >= e_i) {
			return;
		}
		var d_i = Math.floor((s_i+e_i)/2);
		sort(a, s_i, d_i);
		sort(a, d_i + 1, e_i);
		merge(a, s_i, d_i, e_i);
	}
	sort(arr, 0, arr.length-1);
	return arr;
}

function selectionSort(arr, func) {
	var incOrder = true;
	if(func) {
		incOrder = func(1, 2) < 0;
	}
	function swap(a, i, j) {
		var temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}
	
	function getSwapIndex(a, s_i, e_i) {
		var ind = s_i, val = a[s_i], i;
		for(var i=s_i+1;i<=e_i;i++) {
			if((incOrder && (val >= a[i])) || (!incOrder && (val <= a[i]))){
				val = a[i];
				ind = i;
			}
		}
		return ind;
	}
	
	function sort(a, n) {
		var i, j;
		
		for(i=0;i<=n;i++){
			var j = getSwapIndex(a, i, n);
			console.log(i,j);
			if(i != j)
				swap(a, i, j);
		}
	}
	
	sort(arr, arr.length-1);
	return arr;
}

function insertionSort(arr, func) {
	
}