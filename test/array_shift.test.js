'use strict';

const arrayShift = require('../src/array_shift.js');

describe('array shift method', () => {
  it('should return a new array', () => {
    let bill = [1,2,3,4];
    let ted = arrayShift(bill, 7);
    expect(bill.length).toEqual(4);
    expect(ted.length).toEqual(5);
  });
  it('should work with even numbered arrays', () => {
    let rams = [1,2,3,4];
    let saints = arrayShift(rams, 7);
    expect(saints[0]).toEqual(1);
    expect(saints[1]).toEqual(2);
    expect(saints[2]).toEqual(7);
    expect(saints[3]).toEqual(3);
    expect(saints[4]).toEqual(4);
  });
  it('should work with odd numbered arrays', () => {
    let bills = [1,2,3];
    let jets = arrayShift(bills, 9);
    expect(jets[0]).toEqual(1);
    expect(jets[1]).toEqual(9);
    expect(jets[2]).toEqual(2);
    expect(jets[3]).toEqual(3);
  });
});
