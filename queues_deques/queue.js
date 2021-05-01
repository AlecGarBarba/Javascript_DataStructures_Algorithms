class Queue {
    constructor(){
        this.count =0;
        this.lowestCount =0;
        this.items ={};
    }
    enqueue(item){//similar tu push in stacks, but with fifo approach :)
        this.items[this.count]=item;
        this.count++;
    }

    dequeue(){
        if(this.isEmpty()) return undefined;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;

    }

    peek(){
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount]

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
        let string= `${this.items[this.lowestCount]}`;
        if(this.isEmpty()) return '';

        for(let i = this.lowestCount+1; i < this.count; i++){
            string= `${string},${this.items[i]}`
        }

        return string;
    }
}

module.exports= Queue;