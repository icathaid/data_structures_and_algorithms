'use strict';

const Node = require('./node.js');


//  HEAD === BOTTOM OF STACK


class Stack {
  constructor(){
    this.head = null;
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
    //  add error checking for being called on empty list
    if(!this.head){
      return console.log('you called pop on an empty list');
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

// const bill = new Stack;

// bill.push(1).push(2).push(3).push(4);

// console.log('-=-=-=-=-PRE POP BILL-=-=-=-=-');
// console.log(bill.head);
// console.log(bill.head.next);
// console.log(bill.head.next.next);
// console.log(bill.head.next.next.next);

// bill.pop();

// console.log('-=-=-=-=-POST POP BILL-=-=-=-=-');
// console.log(bill.head);
// console.log(bill.head.next);
// console.log(bill.head.next.next);
// console.log(bill.head.next.next.next);
// console.log('post pop bill.top:     ', bill.top);

// const ted = new Stack;

// ted.push(9).push(8).push(7);
// console.log('ted.top:    ', ted.top);
// console.log('ted.peek', ted.peek());

// const rufus = new Stack;
// console.log('rufus', rufus.peek());