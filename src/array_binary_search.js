'use strict';

module.exports = exports = (arr, Target) => {
  let L = 0;
  let R = (arr.length - 1);
  while (L <= R) {
    let m = Math.floor((L + R) / 2);
    if (arr[m] < Target) {
      L = m + 1;
    }
    else if (arr[m] > Target) {
      R = m - 1;
    }
    else if (arr[m] == Target) {
      return m;
    }
  }
  return -1;
};