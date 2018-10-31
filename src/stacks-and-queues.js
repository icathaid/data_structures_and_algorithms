'use strict';

const Node = require('./node.js');

// const bill = new Node(6);

// console.log(bill);

class Stack {
  constructor(){
    this.head = null;
  }
  addToTop(val){
    if(!this.head){
      this.head = new Node(val);
      return this;
    }
    else {
      let current = this.head;
      while(current.next){
        current=current.next;
      }
      current.next = new Node(val);
      return this;
    }
  }
}

const bill = new Stack;
console.log('empty bill:    ', bill);
bill.addToTop(6).addToTop(7);
console.log('full bill:     ', bill);