const DoublyLinkedList = require('../linkedlists/doublylinkedlist') 

test('insertiing nodes',()=>{
    const dll = new DoublyLinkedList();
    expect(dll.insert(12,2)).toBe(false);
    expect(dll.insert(12,0)).toBe(true);
    dll.insert(1,0)
    dll.insert(3,2)
    dll.insert(0,0)
    expect(dll.head.next.element).toBe(1) 
})


test('remove elements',()=>{
    const dll = new DoublyLinkedList();
    dll.insert(1,0)
    dll.insert(2,1)
    dll.insert(3,2)
    expect(dll.removeAt(0)).toBe(1)
    //expect(dll.getElementAt(1)).toBe(3)
    console.log(dll.toString())
})