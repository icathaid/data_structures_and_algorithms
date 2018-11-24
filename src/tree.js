'use strict';

const Node = require('./node.js');

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    }
    const _insert = node => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        }
        else if (node.left !== null) {
          return _insert(node.left);
        }
      }
      else if (value > node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        }
        else if (node.right !== null) {
          return _insert(node.right);
        }
      }
      else {
        return null;
      }
    };
    _insert(node);
  }

  search(value){
    if(!this.root){ return null; }
    let current = this.root;
    while (current.value !== value){
      if(value < current.value){
        current = current.left;
      }
      else {
        current = current.right;
      }
      if(current === null){
        return null;
      }
    }
    return current;
  }


  // Root - Left - Right
  preOrder() {
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
    };

    _walk(this.root);
    return results;
  }
  // Left - Right - Root
  postOrder() {
    let results = [];

    let _walk = (node) => {
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
      results.push(node.value);
    };

    _walk(this.root);
    return results;
  }

  // Left - Root - Right
  inOrder() {
    let results = [];

    let _walk = (node) => {
      if (node.left) { _walk(node.left); }
      results.push(node.value);
      if (node.right) { _walk(node.right); }
    };

    _walk(this.root);
    return results;
  }

  // Breadth First

  levelOrder() {
    let results = [];
    let nodeQueue = [];

    nodeQueue.push(this.root);

    while (nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if (current.left) { nodeQueue.push(current.left); }
      if (current.right) { nodeQueue.push(current.right); }
    }
    return results;
  }
}

console.log('stfu gh');
module.exports = Tree;

