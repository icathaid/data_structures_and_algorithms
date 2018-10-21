'use strict';

const List = require('../ll_insertion.js');

const bill = new List;

bill.append(1).append(2).append(3).append(4);
bill.insertBefore(2, 7);

console.log(bill.head.value);
console.log(bill.head.next.value);
console.log(bill.head.next.next.value);
console.log(bill.head.next.next.next.value);


console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

bill.insertBefore(7, 9);
console.log(bill.head.value);
console.log(bill.head.next.value);
console.log(bill.head.next.next.value);
console.log(bill.head.next.next.next.value);
console.log(bill.head.next.next.next.next.value);
