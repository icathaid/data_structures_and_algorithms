'use strict';

const Stack = require('../src/stacks-and-queues.js');

describe('constructor function', () => {
  it('should return an empty stack if called with no arguments', () => {
    let dude = new Stack;
    expect(dude).toBeDefined();
    expect(dude.head).toBeNull();
    expect(dude.next).toBeNull();
  });
});

describe('push function', () => {
  it('should add add a new node with the value given to the top of the stack', () => {
    let walter = new Stack;
    expect(walter.head).toBeNull();
    walter.push(1);
    expect(walter.head).toBeDefined();
    expect(walter.head.value).toEqual(1);
    expect(walter.head.next).toBeNull();
  });
  it('should add multiple new nodes to the stack in the correct order', () => {
    let donny = new Stack;
    donny.push(1).push(2).push(3);
    expect(donny.head.value).toEqual(1);
    expect(donny.head.next.value).toEqual(2);
    expect(donny.head.next.next.value).toEqual(3);
  });
  it('should correctly track the top of the stack', () => {
    let theJesus = new Stack;
    theJesus.push(1);
    expect(theJesus.top.value).toEqual(1);
    theJesus.push(2);
    expect(theJesus.top.value).toEqual(2);
    theJesus.push(3);
    expect(theJesus.top.value).toEqual(3);
  });
});

describe('pop function', () => {
  it('should remove the top node from the stack', () => {
    let larry = new Stack;
    console.log('THIS IS WHAT HAPPENS, LARRY!');
    larry.push(1).push(2).push(3);
    expect(larry.top.value).toEqual(3);
    larry.pop();
    expect(larry.top.value).toEqual(2);
    larry.pop();
    expect(larry.top.value).toEqual(1);
  });
  it('should return the deleted node', () => {
    let bunny = new Stack;
    bunny.push(1).push(2).push(3);
    let karlHungus = bunny.top;
    expect(bunny.pop()).toEqual(karlHungus);
  });
  it('should return a (mocked) error if called on an empty list', () => {
    let smokey = new Stack;
    expect(smokey.pop()).toEqual('you called pop on an empty list');
  });
});

describe('peek module', () => {
  it('should return the top node on the stack when called without argument', () => {
    let nihilist1 = new Stack;
    nihilist1.push(1).push(2).push(3);
    let nihilist2 = nihilist1.peek();
    expect(nihilist2.value).toEqual(3);
    nihilist1.push(4).push(5);
    nihilist2 = nihilist1.peek();
    expect(nihilist2.value).toEqual(5);
  });
});