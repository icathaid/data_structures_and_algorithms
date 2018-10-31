'use strict';

const Node = require('./node.js');


//  HEAD === BOTTOM OF STACK


class Stack {
  constructor(){
    this.head = null;
    this.top = null;
  }
  addToTop(val){
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
}

const bill = new Stack;
console.log('empty bill:    ', bill);
bill.addToTop(6).addToTop(7);
console.log('full bill:     ', bill);
console.log('bill.top:    ', bill.top);