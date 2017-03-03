// test file for linked list

#include <stdlib.h>
#include <string>

#include "../../DS/linkedlist.cpp"

using namespace std;

class LinkedListTest {

		LinkedList* _list;

	public:

		LinkedListTest() {
			_list = new LinkedList();
		}

		void RunAll() {
			InitRootIsNull();
			InsertRoot();
		}

		void InitRootIsNull() {
			cout << "Initializing the Linked List will create an empty list.\n";
			_list->Print();
		}

		void InsertRoot() {
			cout << "Inserting root node.\n";
			node* root = new node(1);
			root->data = 19;
			_list->Add(root);
			_list->Print();
		}
};
