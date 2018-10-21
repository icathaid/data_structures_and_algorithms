'use strict';

const List = require('../ll_kth_from_the_end.js');

describe('kth from the end method', () => {
  const bill = new List;
  const ted = new List;
  bill.append(2).append(3).append(5).append(7).append(11);
  it('should return the correct value for the given input', () => {
    expect(bill.kthFromEnd(0)).toEqual(11);
    expect(bill.kthFromEnd(1)).toEqual(7);
    expect(bill.kthFromEnd(2)).toEqual(5);
    expect(bill.kthFromEnd(3)).toEqual(3);
    expect(bill.kthFromEnd(4)).toEqual(2);
  });
  it('should return an exception if given an invalid input', () => {
    expect(bill.kthFromEnd(7)).toEqual('Exception');
  });
  it('should return an exception if called on an empty list', () => {
    expect(ted.kthFromEnd(0)).toEqual('Exception');
  });
});