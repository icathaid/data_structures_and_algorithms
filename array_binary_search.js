'use strict';

const binarySearch = (arr, Target) => {
    let L = 0;
    let R = (arr.length -1);
    while(L <= R){
        let m = Math.floor((L + R)/2);
        if(arr[m] < Target){
            L = m + 1;
        }
        else if (arr[m] > Target) {
            R = m - 1;
        }
        else if (arr[m] == Target){
            return m;
        }
        else return -1;
    };
};

let bill = [1,2,3,4,5,6,7,8,9];
let ted = 6;

console.log(binarySearch(bill, ted));