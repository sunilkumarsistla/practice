#include "stdafx.h"
#include "CppUnitTest.h"
#include "../Practice.Library/LinkedList.h"

using namespace Microsoft::VisualStudio::CppUnitTestFramework;
using namespace Microsoft::VisualStudio::TestTools::UnitTesting;
using namespace DataStructure;

namespace Test
{
	TEST_CLASS(LinkedListTests)
	{
	private:
		TestContext^ testContextInstance;
		LinkedList _list;
	public:

		TEST_CLASS_INITIALIZE(LinkedList_Setup) {
			_list = new LinkedList();
		}

		TEST_METHOD(LinkedList_Empty_Prints_EmptyString)
		{
			// TODO: Your test code here

		}

	};
}