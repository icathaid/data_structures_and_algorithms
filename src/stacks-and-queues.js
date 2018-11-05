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

class Queue {
  constructor(){
    this.head = null;
    this.next = null;
    this.front = null;
  }
  enqueue(val){
    let holdThis = this.head;
    let node = new Node(val);
    this.head = node;
    if(!this.front){
      this.front = node;
    }
    this.head.next = holdThis;
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
      this.front = current;
    }
    let holder = current.next;
    current.next = null;
    return holder;
  }
  peek(){
    return this.front;
  }
}

module.exports = { Stack, Queue };


let larry = new Queue;
larry.enqueue(1).enqueue(2).enqueue(3);
console.log('FRONT:       ', larry.front);
larry.enqueue(4);
console.log('FRONT:       ', larry.front);
larry.dequeue();
console.log('FRONT:       ', larry.front);

console.log('peek', larry.peek());