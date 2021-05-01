class Deque {
    constructor(){
        this.count=0;
        this.lowestCount=0;
        this.items={};
    }

    addFront(item){
        if(this.isEmpty()){
            this.addBack(item);
        }else if(this.lowestCount){
            this.lowestCount--;
            this.items[this.lowestCount]=item;
        }else{
            for(let i= this.count; i>0;i--){
                this.items[i]=this.items[i-1];
            }
            this.count++;
            this.lowestCount=0;
            this.items[0]= item;
        }
    }
    addBack(item){
        this.items[this.count]=item;
        this.count++;
    }
    removeFront(){
        delete this.items[this.lowestCount];
        this.lowestCount++;

    }
    removeBack(){
        delete this.items[this.count-1];
        this.count--;
    }
    peekFront(){
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }
    peekBack(){
        if(this.isEmpty()) return undefined;
        return this.items[this.count-1];
    }
    isEmpty(){
        return this.size() ===0;
    }

    size(){
        return this.count - this.lowestCount;
    }
    clear(){
        this.count=0;
        this.lowestCount=0;
        this.items={};
    }
    toString(){
        if(this.isEmpty()) return '';

        let string= `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount+1; i < this.count; i++){
            string= `${string},${this.items[i]}`
        }
        return string;
    }
}

module.exports=Deque;