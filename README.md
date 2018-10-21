[![Build Status](https://www.travis-ci.com/icathaid/data_structures_and_algorithms.svg?branch=ll_kth_from_the_end)](https://www.travis-ci.com/icathaid/data_structures_and_algorithms)
# Linked List Insertions

Lab Parter:
    Edward Mark Puzino

[![whiteboard image](./assets/07-whiteboard.jpg)](whiteboard.jpg)

## Challenge

Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list.

​
## Solution

In order to determine the length of the linked list, we first iterated through it using a while loop, adding 1 to a global counter variable during each iteration.

We then subtracted the input variable, k, from the counter, and iterated through the list again that many times using a for loop, returning the value found at that node.  
