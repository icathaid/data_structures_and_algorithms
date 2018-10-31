'use strict';

const Node = require('./node.js');


//  HEAD === BOTTOM OF STACK


class Stack {
  constructor(){
    this.head = null;
    this.next = null;
    this.top = null;
  }
  push(val){
    if(!this.head){
      this.head = new Node(val);
      this.top = new Node(val);
      return this;
    }
    else {
      let current = this.head;
      while(current.next){
        current=current.next;
      }
      current.next = new Node(val);
      this.top = current.next;
      return this;
    }
  }
  pop(){
    if(!this.head){
      return 'you called pop on an empty list';
    }
    let current = this.head;
    while(current.next.next){
      current = current.next;
    }
    let deletedNode = current.next;
    current.next = null;
    this.top = current;
    return deletedNode;
  }
  peek(){
    return this.top;
  }
}


//  QUEUE = FIFO

//  enqueue should add to the BACK of the queue, which will be the FRONT of the linked list because reasons
//  dequeue should remove from the FRONT of the queue, which will be the BACK of the linked list

//  no
//  enqueue should add to the FRONT of the queue, which will be the BACK of the linked list, because i have to return the deleted node and i don't want the whole list wrapped up in the .next
//  dequeue should remove from the BACK of the queue, which will be the FRONT of the linked list.
//  this is 'backwards' but will (should) still add/remove data in a FIFO format

class Queue {
  constructor(){
    this.head = null;
    this.next = null;
    // this.front = null;
  }
  enqueue(val){
    let holdThis = this.head;
    let node = new Node(val);
    this.head = node;
    this.head.next = holdThis;
    // this.front = node;
    return this;
  }
  dequeue(){
    if(!this.head){
      console.log('you called dequeue on an empty list');
      return 'you called dequeue on an empty list';
    }
    let current = this.head;
    while(current.next.next){
      current = current.next;
      // this.front = current;
    }
    let holder = current.next;
    current.next = null;
    console.log('holder:    ', holder);
    return holder;
  }
  peek(){
    // return this.front;
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    return current;
  }
}

module.exports = { Stack, Queue };

let bill = new Queue;
bill.enqueue(1).enqueue(2).enqueue(3);
console.log(bill.peek());
bill.dequeue();
console.log(bill.peek());