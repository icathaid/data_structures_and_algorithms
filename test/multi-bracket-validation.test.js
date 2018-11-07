'use strict';

const mbval = require('../src/multi-bracket-validation.js');

describe('mutli-bracket evaluation model', () => {
  it('should return true if called on a balanced string', () => {
    let packers = '{}';
    expect(mbval(packers)).toBe(true);
  });
  it('should return false if called on an unbalanced string', () => {
    let lions = '{{}';
    expect(mbval(lions)).toBe(false);
  });
  it('should work if given multiple types of brackets', () => {
    let vikings = '{([])}';
    let bears = '{{{[[(';
    expect(mbval(vikings)).toBe(true);
    expect(mbval(bears)).toBe(false);
  });
  it('should return true if given a string with no braces', () => {
    let bills = 'terrible';
    expect(mbval(bills)).toBe(true);
  });
});