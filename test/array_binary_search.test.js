'use strict';

const binarySearch = require('../array_binary_search.js');

describe('meatball test', () => {

  it('gets a real easy one to start with', () => {
    let arr = [1];
    let target = 1;
    expect(binarySearch(arr, target)).toEqual(0);
  });

  it('can return the correct array position of a valid search', () => {
      let arr = [1,2,3,4,5,6,7,8,9];
      let target = 6;
    expect(binarySearch(arr, target)).toEqual(5);
  });

  it('returns -1 if no match is found', () => {
    let arr = [1,2,3,4,5,6,7,8,9];
    let target = 15;
    expect(binarySearch(arr, target)).toEqual(-1);
  });
  
});