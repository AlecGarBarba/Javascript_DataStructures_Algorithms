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
        if(position >=0 && position < this.count){
            const node = new Node(element);
            if(position===0){
                //logic for first position
                const current = this.head;
                node.next = current;
                this.head = node;
            }else{
                const previous = this.getNodeAt(position-1)
                const current = this.getNodeAt(position)
                previous.next = node;
                node.next = current;
            }
            
            this.count++;
            return true;

        }else{
            return false;
        }
        
    }  

    indexOf(element){

    }
    
    getElementAt(index){
        const node = this.getNodeAt(index);
        
        if(node) return node.element;
        return undefined;
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

    remove(element){

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

    
    isEmpty(){

    }
    size(){
        return this.count;
    }
    toString(){
        if(this.isEmpty()) return '';

        let string =`${this.head.element}`;
        let current = this.head.next;
        for(let i = 0; i< this.size() && current !=null;i++){
            string=`${string},${current.element}`;
            current=current.next;
        }
        return string;
    }

}


module.exports = LinkedList;
