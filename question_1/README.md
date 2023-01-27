Task : Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the
right of that element in the original input array.

Approach : This Python using a binary search tree is essentially a two-step process.

1. Building the binary search tree from the input array in reverse order.
2. Traversing the tree and calculating the number of smaller elements to the right of each element in the original input array.

This approach has a time complexity of O(n log n) , where n is the number of elements in the array.
