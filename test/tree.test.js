'use strict';

const Tree = require('../src/tree.js');


describe('Binary Search Tree Module - Add Method', () => {
  it('should add a single node to an empty list', () => {
    let pine = new Tree();
    expect(pine.root).toBe(null);
    pine.add(1);
    expect(pine.root.value).toEqual(1);
  });
  it('should add a node to the right of the root if given a higher value', () => {
    let fir = new Tree();
    fir.add(5);
    fir.add(7);
    expect(fir.root.value).toEqual(5);
    expect(fir.root.right.value).toEqual(7);
    expect(fir.root.left).toBe(null);
  });
  it('should add a node to the left of the root if given a lower value', () => {
    let oak = new Tree();
    oak.add(5);
    oak.add(3);
    expect(oak.root.value).toEqual(5);
    expect(oak.root.left.value).toEqual(3);
    expect(oak.root.right).toBe(null);
  });
});

describe('Binary Search Tree Module - Traversal', () => {
  it('should return an array of values from a pre-order traversal of a binary search tree', () => {
    let maple = new Tree();
    maple.add(15);
    maple.add(6);
    maple.add(19);
    maple.add(7);
    maple.add(1);
    expect(maple.preOrder()).toEqual([15, 6, 1, 7, 19]);
  });
  it('should return an array of values from a post-order traversal of a binary search tree', () => {
    let walnut = new Tree();
    walnut.add(15);
    walnut.add(6);
    walnut.add(19);
    walnut.add(7);
    walnut.add(1);
    expect(walnut.postOrder()).toEqual([1, 7, 6, 19, 15]);
  });
  it('should return an array of values from an in-order traversal of a binary search tree', () => {
    let peach = new Tree();
    peach.add(15);
    peach.add(6);
    peach.add(19);
    peach.add(7);
    peach.add(1);
    expect(peach.inOrder()).toEqual([1, 6, 7, 15, 19]);
  });
});

describe('BST - Search Method', () => {
  it('should return the node with the value matching the search key, if found', () => {
    let cherry = new Tree();
    cherry.add(15);
    cherry.add(6);
    cherry.add(19);
    cherry.add(7);
    cherry.add(1);
    expect(cherry.search(6)).toEqual({'left': {'left': null, 'right': null, 'value': 1}, 'right': {'left': null, 'right': null, 'value': 7}, 'value': 6});
  });
  it('should return null if no match is found', () => {
    let apple = new Tree();
    apple.add(15);
    apple.add(6);
    apple.add(19);
    apple.add(7);
    apple.add(1);
    expect(apple.search(22)).toBe(null);
  });
  it('should return null if called on an empty tree', () => {
    let joshua = new Tree();
    expect(joshua.search(1)).toBe(null);
  });
});