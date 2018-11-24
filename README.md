[![Build Status](https://travis-ci.com/icathaid/data_structures_and_algorithms.svg?branch=tree)](https://travis-ci.com/icathaid/data_structures_and_algorithms)
# Trees

Implement a Binary Search Tree

##  Challenge

Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

Create a Binary Tree class with the following traversal methods:
  - preOrder
  - postOrder
  - levelOrder
  * each method must take in a root node and return an array of values.

Create a Binary Search tree class with the following methods:
  - add
    - takes in a value and inserts a new node with that value at the correct location in the BST
  - search
    - takes in a value and returns the node matching that value if one exists
      - returns null if no node is found

##  Approach and Efficiency

I accidentally incorporated both into one class, but all functions work.  

  All three of the traversal methods operate by creating a results array, and then defining a function (which will be immediately invoked with this.root as an argument) that recursively pushes the value of each current node to the results array, then moves one position further down the tree.  They only differ in order of the steps.

  The add method operates by checking if the value of the inserted node is greater or less than the value of the current node, then recursively traverses through the tree until it reaches the end of the appropriate branch

  The search method employs a while loop to traverse through the binary search tree until a node is found matching the search key, or will return null if no match is found.


##  API

Methods available:

preOrder()  - pre order traversal
postOrder() - post order traversal
levelOrder()  - breadth first traversal

add()
  - takes a single argument, a value, and inserts a new node with that value at the correct position on the tree.

search()
  - takes a single argument, a value, and returns the node matching that value if one exists, or null if one does not.