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