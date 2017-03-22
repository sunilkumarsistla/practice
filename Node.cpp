
namespace Common {
	struct Node {
	public:
		int data;
		struct Node *next;

		Node(int d) {
			this->data = d;
		}
	};
}