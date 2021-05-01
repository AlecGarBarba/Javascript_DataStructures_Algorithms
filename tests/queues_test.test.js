const { expect } = require('@jest/globals');
const Queue = require('../queues_deques/queue');


test('test is empty on filling and unfilling the queue', ()=>{
    const queue = new Queue();

    queue.enqueue(32);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
});

test('testing dequeue property',()=>{
    const q = new Queue();
    expect(q.dequeue()).toBe(undefined);
    q.enqueue(32);
    const deq= q.dequeue();
    expect(deq).toBe(32);
});

test('peek function of queue',()=>{
    const q = new Queue();
    q.enqueue('Hola');
    q.enqueue('Mundo');

    expect(q.peek()).toBe('Hola');
})

test('Testing size function of queue',()=>{
    const q = new Queue();

    q.enqueue(12);
    q.enqueue(13);
    expect(q.size()).toBe(2);
    q.dequeue();
    expect(q.size()).toBe(1);
})


test('Clearing queue',()=>{
    const q = new Queue();

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue('4');
    q.clear();
    expect(q.size()).toBe(0);
    expect(q.isEmpty()).toBe(true);
    expect(q.items).toStrictEqual({})
});

test('Testing toString() method',()=>{
    const q = new Queue();
    expect(q.toString()).toStrictEqual('');
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.toString()).toBe('1,2,3');
})