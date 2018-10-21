'use strict';

const List = require('../ll_insertion.js');

describe('append method', () => {

  it('should create a new list with a head of 1 and a next of null', () => {
    const bill = new List;
    bill.append(1);
    expect(bill.head.value).toEqual(1);
    expect(bill.head.next).toBeNull();
  });
  it('should append the nexts without altering the values', () => {
    const ted = new List;
    ted.append(3);
    expect(ted.head.value).toEqual(3);
    expect(ted.head.next).toBeNull();
    ted.append(4);
    expect(ted.head.value).toEqual(3);
    expect(ted.head.next).toBeTruthy();
    //  wasn't sure how else to assert not null
  });
  it('should append multiple values sequentially', () => {
    const rufus = new List;
    rufus.append(9).append(8).append(7).append(6).append(5);
    expect(rufus.head.value).toEqual(9);
    expect(rufus.head.next.value).toEqual(8);
    expect(rufus.head.next.next.value).toEqual(7);
    expect(rufus.head.next.next.next.value).toEqual(6);
    expect(rufus.head.next.next.next.next.value).toEqual(5);
  });

});

describe('insertAfter method', () => {
  
  it('should insert a new node after the first node searched for', () => {
    const dude = new List;
    dude.append(1).append(2);
    expect(dude.head.next.value).toEqual(2);
    expect(dude.head.next.next).toBeNull();
    dude.insertAfter(1, 3);
    expect(dude.head.value).toEqual(1);
    expect(dude.head.next.value).toEqual(3);
    expect(dude.head.next.next.value).toEqual(2);
  });
  it('should only insert a new node after the first node', () => {
    const walter = new List;
    walter.append(9).append(8).append(7).append(8);
    expect(walter.head.value).toEqual(9);
    expect(walter.head.next.value).toEqual(8);
    expect(walter.head.next.next.value).toEqual(7);
    expect(walter.head.next.next.next.value).toEqual(8);
    expect(walter.head.next.next.next.next).toBeNull();
    walter.insertAfter(8, 0);
    expect(walter.head.value).toEqual(9);
    expect(walter.head.next.value).toEqual(8);
    expect(walter.head.next.next.value).toEqual(0);
    expect(walter.head.next.next.next.value).toEqual(7);
    expect(walter.head.next.next.next.next.value).toEqual(8);
    expect(walter.head.next.next.next.next.next).toBeNull();
  });
  it('should work on an empty list', () => {
    const donny = new List;
    donny.insertAfter(undefined, 5);
    expect(donny.head.value).toEqual(5);
    expect(donny.head.next).toBeNull();
  });
});

describe('insertBefore method', () => {
  it('should work', () => {
    
  });
});