#include <iostream>

#include "Tests/DS/LinkedListTest.cpp"
/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	
	LinkedListTest* llTest = new LinkedListTest();
	
	llTest->RunAll();
	return 0;
}
