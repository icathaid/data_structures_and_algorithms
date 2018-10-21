'use strict';

const Node = require('./node.js');

class List {

  constructor() {
    this.head = null;
  }
  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }
  kthFromEnd(k){
    if(!this.head){
      return 'Exception';
    }
    let ctr = 0;
    let current = this.head;
    while(current.next){
      current = current.next;
      ctr++;
    }
    if(k > ctr){
      return 'Exception';
    }
    current = this.head;
    for(let i = 0; i < (ctr - k); i++){
      current = current.next;
    }
    return current.value;
  }
}

module.exports = List;
