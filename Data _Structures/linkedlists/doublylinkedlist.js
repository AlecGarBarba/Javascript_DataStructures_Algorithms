const DoublyNode =require( './doublyNode');
const LinkedList = require('./linkedlist');

const defaultEquals=(a, b)=>{
    return a == b;
}

class DoublyLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals){
        super(equalsFn);
        this.tail = undefined;
    }
    insert(element, index){
        if(index <0 || index > this.count) return false;
        const node = new DoublyNode(element);
        let current = this.head;
        if(index === 0){
            if(this.head== null){ //If empty, tail and head is the same. only one node
                this.head = node;
                this.tail = node;
            }else{
                node.next = this.head; // the new node's head is the current head
                current.prev = node;  //the previous head's tail is the new node
                this.head = node; //the new node becomes the head 
            }
        } else if(index === this.count){ //insertion at last element
            current = this.tail; //
            current.next = node;
            node.prev = current;
            this.tail = node;
        }else{
            const previous = this.getNodeAt(index-1); //inserting between current and previous
            current = previous.next;
            previous.next = node;
            node.previous = previous;
            node.next = current;
        }
        this.count++;
        return true;
    }

    removeAt(index){
        if(index <0 || index > this.count) return undefined;
        let current = this.head;
        if(index ===0){
            this.head = current.next;
            if(this.count ==1) this.tail= undefined;
            else this.head.prev = undefined;
        }

        return current.element;
    }
}

module.exports = DoublyLinkedList;