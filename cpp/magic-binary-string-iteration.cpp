
// https://www.geeksforgeeks.org/find-ith-index-character-in-a-binary-string-obtained-after-n-iterations/

#include<iostream>
#include<vector>
#include<math.h>
using namespace std;

void printVector(vector<bool> &v, bool printNeg) {
	for(int i=0;i<v.size();i++)
		cout << (v[i] ^ printNeg) ? 1 : 0;
}

void PrepareMap(vector<bool> &col, int iter) {
	if(col.size() == 0)	{
	 	col.push_back(false);
	 	col.push_back(true);
	}
 	
	if(pow(2, iter) < col.size()) return;
	int currentIndex = log2(col.size());
	
 	for(int i=currentIndex;i<iter;i++) {
 		int k=col.size();
 		for(int j=0;j<k;j++) {
 			col.push_back(!col[j]);
		 }
	}	
}

void GetBits(int num, vector<bool> &res) {
	if(num > 1) {
		GetBits(num >> 1, res);
	}
	res.push_back((num&1) == 1);
}

char GetResult(int num, int iter, int index, bool print) {
	// the max string length is no.of bits in num * 2^iterations.
	vector<bool> bits;
	GetBits(num, bits);
	unsigned long maxPossIndex = pow(2, iter) * bits.size();
		
	if(index > maxPossIndex) return ' ';
	vector<bool> lu;
	PrepareMap(lu, iter);
		
	int absSeg = index / pow(2, iter);
	int absInd = index % (int)pow(2, iter);
			
	if(print) {
		cout << "vector: ";
		for(int i=0;i<bits.size();i++) printVector(lu, bits[i]);
		cout << endl;
	}
	
	return bits[absSeg] ^ lu[absInd] ? '1' : '0';
}

int main() {
	cout << GetResult(5, 2, 8, true) << endl;
	cout << GetResult(3, 3, 6, true) << endl;
  	return 0;
}

