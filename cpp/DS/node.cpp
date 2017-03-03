// common node

struct node {
	public:
		int data;
		struct node *next;

		node(int d) {
			this->data = d;
		}
};
