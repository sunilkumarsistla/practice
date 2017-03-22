#include<iostream>
#include <string>
#include "Node.cpp"

using namespace std;
using namespace Common;

namespace DataStructure {

	class LinkedList {
		Node* root;

	public:

		void Add(Node* node) {
			struct Node* current = this->root;
			while (current != NULL && current->next != NULL) {
				cout << current->data;
				if (current->next != NULL) {
					cout << " ";
				}
				current = current->next;
			}
			if (current == NULL) {
				this->root = node;
			}
			else {
				current->next = node;
			}

		}

		Node* GetRoot() {
			return this->root;
		}

		void Print() {
			struct Node* current = this->root;
			while (current != NULL) {
				cout << current->data << " ";
				current = current->next;
			}
		}

		Node* Search(int data) {
			struct Node* current = this->root;
			while (current != NULL) {
				if (current->data == data) {
					return current;
				}
			}
			return NULL;
		}

		bool HasNode(Node* node) {
			struct Node* current = this->root;
			while (current != NULL) {
				if (current == node) {
					return true;
				}
			}
			return false;
		}

		int Remove(Node* node) {
			struct Node* current = this->root;
			while (current != NULL) {
				if (current->next == node) {
					current->next = current->next->next;
					delete node;
					return 1;
				}
			}
			return 0;
		}
	};

}