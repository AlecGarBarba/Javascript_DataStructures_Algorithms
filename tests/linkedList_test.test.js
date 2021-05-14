const LinkedList = require('../linkedlists/linkedlist');


test('pushing elements',()=>{
    const ll = new LinkedList();
    ll.push(1); 
    ll.push(2);
    ll.push(3);
    expect(ll.count).toBe(3);
})

test('removing elements',()=>{
    const ll = new LinkedList();
    expect(ll.removeAt(-1)).toBe(undefined);
    expect(ll.removeAt(0)).toBe(undefined);
    ll.push(1); 
    ll.push(2);
    ll.push(3);
    expect(ll.removeAt(2)).toBe(3);
    expect(ll.removeAt(0)).toBe(1);
})

test('Get element At index',()=>{
    const ll = new LinkedList();
    expect(ll.getElementAt(0)).toBe(undefined); 
    ll.push(1); 
    ll.push(2);
    ll.push(3);
    expect(ll.getElementAt(0)).toBe(1);
    expect(ll.getElementAt(1)).toBe(2);
    expect(ll.getElementAt(2)).toBe(3);
})

test('To string',()=>{
    const ll = new LinkedList(); 
    ll.push(1); 
    ll.push(2);
    ll.push(3); 
    expect(ll.toString()).toBe('1,2,3')
})


test('Insert Element at position',()=>{
    const ll = new LinkedList();
    expect(ll.insert(0,-1)).toBe(false); 
    ll.push(1); 
    ll.push(2);
    ll.push(3);
    expect(ll.insert(0,0)).toBe(true); 
    expect(ll.getElementAt(0)).toBe(0);
    expect(ll.getElementAt(1)).toBe(1);
    expect(ll.getElementAt(2)).toBe(2);
    expect(ll.getElementAt(3)).toBe(3);
    expect(ll.getElementAt(4)).toBe(undefined);
})


test('Index of element at linkedlist',()=>{
    const ll = new LinkedList();
    expect( ll.indexOf(1) ).toBe(-1);
    ll.push(1);
    ll.push(2);
    ll.push(3);
    ll.push(4); 
    expect( ll.indexOf(1) ).toBe(0);
    expect( ll.indexOf(2) ).toBe(1);
    expect( ll.indexOf(3) ).toBe(2);
    expect( ll.indexOf(4) ).toBe(3); 
    expect( ll.indexOf(5) ).toBe(-1);
});

test('Remove node by element',()=>{
    const ll = new LinkedList(); 
    ll.push(1);
    ll.push(2);
    ll.push(3);
    ll.push(4); 
    expect(ll.remove(4)).toBe(4);
    expect(ll.count).toBe(3);
    expect(ll.remove(12)).toBe(undefined);
});