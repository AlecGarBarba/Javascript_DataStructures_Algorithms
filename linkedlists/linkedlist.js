const Node =require( './node');

const defaultEquals=(a, b)=>{
    return a === b;
}

class LinkedList {
    constructor(equalsFn = defaultEquals){
        this.count=0;
        this.head=undefined;
        this.equalsFn = equalsFn;
    }

    indexOf(){

    }
    push(element){
        const node = new Node(element);
        let current;
        if(this.head==null) { 
            this.head= node;
        }else{
            current=this.head;
            while(current.next !=null){
                current=current.next;
            }
            current.next = node;  
        }
        this.count++;
       
    }
    insert(element,position){

    }
    getElementAt(index){
        const node = this.getNodeAt(index);
        
        if(node) return node.element;
        return undefined;
    }
    remove(element){

    }
    indexOf(element){

    }
    removeAt(index){
        if(index <0 || index >= this.count) return undefined;
        let current = this.head;
        if(index ===0){
            this.head= current.head;
        }else{
            const previous = this.getNodeAt(index-1);
            current = previous.next;
            previous.next= current.next;
        }
        this.count--;
        return current.element;


    }

    getNodeAt(index){
        if(index <0 || index >= this.count) return undefined;
        let currentNode = this.head;
        if(index ===0){
            return currentNode;
        }else{
            for( let i = 0; i<index;i++){
                currentNode= currentNode.next;
            }
            return currentNode;
        }
    }
    isEmpty(){

    }
    size(){

    }
    toString(){

    }

}


module.exports = LinkedList;
