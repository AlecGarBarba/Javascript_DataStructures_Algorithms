const Deque = require('../queues_deques/deque')


test('add Front and peek Front',()=>{
    const d = new Deque();
    d.addFront(29);
    d.addFront(30);
    d.addBack(20);
    expect(d.peekFront()).toBe(30);
})

test('addBack and peekBack',()=>{
    const d = new Deque();
    d.addBack(29);
    d.addBack(22);
    d.addFront(999);
    expect(d.peekBack()).toBe(22);
})

test('size of a deque',()=>{
    const d = new Deque();
    expect(d.size()).toBe(0);
    d.addBack(29);
    d.addBack(22);
    d.addFront(999);
    expect(d.size()).toBe(3);
})

test('toString method',()=>{
    const d = new Deque();
    d.addBack('1');
    d.addBack('2')
    d.addFront('0');
    expect(d.toString()).toBe('0,1,2')
});


test('delete front element',()=>{
    const d = new Deque();
    d.addBack('1');
    d.addFront('0');
    d.addFront('-1');
    d.removeFront();
    d.addFront('10');
    d.removeFront();
    expect(d.toString()).toBe('0,1')
})

test('delete back element',()=>{
    const d = new Deque();
    d.addBack('1');
    d.addFront('0'); 
    d.removeBack();
    d.addBack('1');
    d.removeBack();
    expect(d.toString()).toBe('0')
})

test('Super deque test',()=>{
    const d = new Deque();
    expect(d.isEmpty()).toBe(true);
    d.addBack('John');
    d.addBack('Jack');
    expect(d.toString()).toBe('John,Jack');
    d.addBack('Camila');
    expect(d.toString()).toBe('John,Jack,Camila');
    expect(d.size()).toBe(3);
    expect(d.isEmpty()).toBe(false);
    d.removeFront();
    expect(d.toString()).toBe('Jack,Camila');
    d.removeBack();
    expect(d.toString()).toBe('Jack');
    d.addFront('John');
    expect(d.toString()).toBe('John,Jack');
    expect(d.size()).toBe(2);
})