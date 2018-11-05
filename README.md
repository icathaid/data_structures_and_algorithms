[![Build Status](https://travis-ci.com/icathaid/data_structures_and_algorithms.svg?branch=stack_and_queue)](https://travis-ci.com/icathaid/data_structures_and_algorithms)


##  Lab 10 - Stacks and Queues
  Lab 10 - Data Structures and Algorithms - Stacks and Queues
  Codefellows 401n7
  James McDaniel

##  Challenge - 

  Create a Stack and Queue class to implement First In First Out stacks and First In Last Out queues, both utilizing linked lists.

##  Approach and efficiency - 

  Both classes begin with a node constructor.  The push and enqueue functions are essentially the same, as are the pop/dequeue functions, they just do things in a different order.

  `push/enqueue` - Stacks iterate through the entire list, if there is one, and add a new value to the end.  Queues add a new value to the beginning, and then iterate through the rest of the list, shuffling each value through a swap variable, and re-assigning it to the queue one position further down.

  `pop/dequeue` - Both functions iterate through the entire list, setting the last node to null and returning a copy of it.  Because the push/enqueue functions read the lists in oppoisite orders, this preserves the nature of the FIFO/FILO structures.


##  API

- Stack Properties and Methods:
  - should create a `top` value to track the top of the stack
  - `push` takes a value and adds it to the top of the stack
  - `pop` removes node from top of stack and returns the node
  - `peek` returns the node at the top of the stack

  - Queue Methods and Properties:
    - should create a `front` value to track the front of the queue
    - `enqueue` takes a value and places it at the front of the queue
    - `dequeue` removes the front of the queue and returns the node
    - `peek` returns the node located at the front of the stack



###  Notes:

I had to hardcode the path to the test into package.json to prevent travis from failing on other labs that I haven't finished testing for yet.