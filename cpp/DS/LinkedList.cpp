// simple linked list

#include<iostream>
#include <string>

#include "node.cpp"

using namespace std;

class LinkedList {
		node* root;

	public:

		void Add(node* node) {
			struct node* current = this->root;
			while(current != NULL && current->next != NULL) {
				cout << current->data << " ";
				current = current->next;
			}
			if(current == NULL) {
				this->root = node;
			} else {
				current->next = node;
			}

		}

		node* GetRoot() {
			return this->root;
		}

		void Print() {
			struct node* current = this->root;
			while(current != NULL) {
				cout << current->data << " ";
				current = current->next;
			}
		}

		node* Search(int data) {
			struct node* current = this->root;
			while(current != NULL) {
				if(current->data == data) {
					return current;
				}
			}
			return NULL;
		}

		bool HasNode(node* node) {
			struct node* current = this->root;
			while(current != NULL) {
				if(current == node) {
					return true;
				}
			}
			return false;
		}

		int Remove(node* node) {
			struct node* current = this->root;
			while(current != NULL) {
				if(current->next == node) {
					current->next = current->next->next;
					delete node;
					return 1;
				}
			}
			return 0;
		}
};
