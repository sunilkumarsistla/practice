// you are given a string 'abcabc' u need to find max possible substrings of the pattern /a+b+c+/i

function main(input) {
    //Enter your code here
	var i=0, cnt = {a: 0, b: 0, c: 0};
	
	for(i=0;i<input,length;i++) {
		if(input[i] === 'a') {
			cnt.a = cnt.a << 1;
			cnt.a = cnt.a + 1;
		} else if(input[i] === 'b') {
			cnt.b = cnt.b << 1;
			cnt.b += cnt.a;
		} else if(input[i] === 'c') {
			cnt.c = cnt.c << 1;
			cnt.c += cnt.b;
		}
	}
	console.log(cnt.c);
}