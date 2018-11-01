'use strict';
//  these tests are almost identical, how can I make the method dynamic?  

//  STACK TESTING
const { Stack, Queue} = require('../src/stacks-and-queues.js');

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
    expect(bunny.top.value).toEqual(3);
    bunny.pop();
    expect(bunny.top.value).toEqual(2);
  });
  it('should return a (mocked) error if called on an empty list', () => {
    let smokey = new Stack;
    expect(smokey.pop()).toEqual('you called pop on an empty list');
  });
});

describe('peek function', () => {
  it('should return the top node on the stack', () => {
    let nihilist1 = new Stack;
    nihilist1.push(1).push(2).push(3);
    let nihilist2 = nihilist1.peek();
    expect(nihilist2.value).toEqual(3);
    nihilist1.push(4).push(5);
    nihilist2 = nihilist1.peek();
    expect(nihilist2.value).toEqual(5);
  });
});

//  QUEUE TESTING

describe('constructor function', () => {
  it('should return an empty queue if called with no arguments', () => {
    let han = new Queue;
    expect(han).toBeDefined();
    expect(han.front).toBeNull();
    expect(han.head).toBeNull();
    expect(han.next).toBeNull();
  });
});

describe('enqueue function', () => {
  it('should add add a new node with the value given to the top of the queue', () => {
    let luke = new Queue;
    console.log(luke);
    expect(luke.head).toBeNull();
    luke.enqueue(1);
    expect(luke.head).toBeDefined();
    expect(luke.head.value).toEqual(1);
    expect(luke.head.next).toBeNull();
  });
  it('should add multiple new nodes to the queue in the correct order', () => {
    let leia = new Queue;
    leia.enqueue(1).enqueue(2).enqueue(3);
    expect(leia.head.value).toEqual(3);
    expect(leia.head.next.value).toEqual(2);
    expect(leia.head.next.next.value).toEqual(1);
  });
  it('should correctly track the front of the queue', () => {
    let jarjar = new Queue;
    expect(jarjar.front).toBeNull();
    jarjar.enqueue(1);
    expect(jarjar.front.value).toEqual(1);
    jarjar.enqueue(2);
    expect(jarjar.front.value).toEqual(1);
  });
});

describe('dequeue function', () => {
  it('remove the front node from the queue', () => {
    let lando = new Queue;
    lando.enqueue(1).enqueue(2).enqueue(3);
    expect(lando.front.value).toEqual(1);
    lando.dequeue();
    expect(lando.front.value).toEqual(2);
  });
  it('should return the deleted node', () => {
    let obiWan = new Queue;
    obiWan.enqueue(1).enqueue(2).enqueue(3);
    expect(obiWan.head.value).toEqual(3);
    expect(obiWan.head.next.value).toEqual(2);
    expect(obiWan.head.next.next.value).toEqual(1);
    obiWan.dequeue();
    expect(obiWan.head.value).toEqual(3);
    expect(obiWan.head.next.value).toEqual(2);
    expect(obiWan.head.next.next).toBeNull();
  });
  it('should return a (mocked) error if called on an empty list', () => {
    let porkins = new Queue;
    expect(porkins.dequeue()).toEqual('you called dequeue on an empty list');
  });
  it('should correctly track the front of the queue', () => {
    let kylo = new Queue;
    expect(kylo.front).toBeNull();
    kylo.enqueue(1).enqueue(2).enqueue(3);
    expect(kylo.front.value).toEqual(1);
    kylo.dequeue();
    expect(kylo.front.value).toEqual(2);
  });
});

describe('peek function', () => {
  it('should return the front node of the queue', () => {
    let r2d2 = new Queue;
    r2d2.enqueue(1).enqueue(2).enqueue(3);
    let c3po = r2d2.peek();
    expect(c3po.value).toEqual(1);
    r2d2.dequeue();
    r2d2.enqueue(4).enqueue(5);
    c3po = r2d2.peek();
    expect(c3po.value).toEqual(2);
  });
});
