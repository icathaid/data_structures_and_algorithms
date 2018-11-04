'use strict';

function insertShiftArray(arr, val){
  let newArr = [];
  let mp = Math.floor(arr.length/2);
  arr.length +=1;
  newArr.length = arr.length;
  for(let i = 0; i < mp; i++){
    newArr[i] = arr[i];
  }
  newArr[mp] = val;
  for(let i = mp + 1; i < arr.length; i++){
    newArr[i] = arr[i - 1];
  }
  return newArr;
}

let bill = [1,2,3,4];
let ted = 7;

console.log(insertShiftArray(bill, ted));


module.exports = insertShiftArray;