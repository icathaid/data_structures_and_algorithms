'use strict';

const Tree = require('../src/tree.js');


describe('Binary Search Tree Module - Insert Method', () => {
  it('should add a single node to an empty list', () => {
    let pine = new Tree();
    expect(pine.root).toBe(null);
    pine.insert(1);
    expect(pine.root.value).toEqual(1);
  });
  it('should add a node to the right of the root if given a higher value', () => {
    let fir = new Tree();
    fir.insert(5);
    fir.insert(7);
    expect(fir.root.value).toEqual(5);
    expect(fir.root.right.value).toEqual(7);
    expect(fir.root.left).toBe(null);
  });
  it('should add a node to the left of the root if given a lower value', () => {
    let oak = new Tree();
    oak.insert(5);
    oak.insert(3);
    expect(oak.root.value).toEqual(5);
    expect(oak.root.left.value).toEqual(3);
    expect(oak.root.right).toBe(null);
  });
});

describe('Binary Search Tree Module - Traversal', () => {
  it('should return an array of values from a pre-order traversal of a binary search tree', () => {
    let maple = new Tree();
    maple.insert(15);
    maple.insert(6);
    maple.insert(19);
    maple.insert(7);
    maple.insert(1);
    expect(maple.preOrder()).toEqual([15, 6, 1, 7, 19]);
  });
  it('should return an array of values from a post-order traversal of a binary search tree', () => {
    let walnut = new Tree();
    walnut.insert(15);
    walnut.insert(6);
    walnut.insert(19);
    walnut.insert(7);
    walnut.insert(1);
    expect(walnut.postOrder()).toEqual([1, 7, 6, 19, 15]);
  });
  it('should return an array of values from an in-order traversal of a binary search tree', () => {
    let peach = new Tree();
    peach.insert(15);
    peach.insert(6);
    peach.insert(19);
    peach.insert(7);
    peach.insert(1);
    expect(peach.inOrder()).toEqual([1, 6, 7, 15, 19]);
  });
});

describe('BST - Search Method', () => {
  it('should return the node with the value matching the search key, if found', () => {
    let cherry = new Tree();
    cherry.insert(15);
    cherry.insert(6);
    cherry.insert(19);
    cherry.insert(7);
    cherry.insert(1);
    expect(cherry.search(6)).toEqual({'left': {'left': null, 'right': null, 'value': 1}, 'right': {'left': null, 'right': null, 'value': 7}, 'value': 6});
  });
  it('should return null if no match is found', () => {
    let apple = new Tree();
    apple.insert(15);
    apple.insert(6);
    apple.insert(19);
    apple.insert(7);
    apple.insert(1);
    expect(apple.search(22)).toBe(null);
  });
  it('should return null if called on an empty tree', () => {
    let joshua = new Tree();
    expect(joshua.search(1)).toBe(null);
  });
});