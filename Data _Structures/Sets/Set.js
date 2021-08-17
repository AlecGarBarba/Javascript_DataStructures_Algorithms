class Set_ { //underscore because it is already declared :( 
    constructor(){
        this.items = {};
    }

    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;

    }

    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }

    has(element){
        return Object.prototype.hasOwnProperty.call(this.items,element);

    }

    clear(){
        this.items = {};
    }

    size(){
        return Object.keys(this.items).length;
    }

    values(){
        return Object.values(this.items); 
    }

    join(otherSet){
        const unionSet = new Set_(); 
        this.values().forEach(value => unionSet.add(value)  );
        otherSet.values().forEach(value => unionSet.add(value)  );

        return unionSet;
    }
    intersect(otherSet){ //optimizing by searching the smaller set to Iterate to. 
        const intersectionSet = new Set_();
        const values = this.values();
        const otherValues = otherSet.values();
        const smallerSet = values.length > otherValues.length? values:otherValues;
        const biggerSet =  values.length > otherValues.length? otherValues:values;
        smallerSet.forEach(value =>{
            if(biggerSet.includes(value)) intersectionSet.add(value);
        });
        return intersectionSet;
    }

    difference(otherSet){
        const differenceSet = new Set_();
        this.values().forEach(value=>{
            if(!otherSet.has(value)) differenceSet.add(value);
        });
        return differenceSet;
    }

    isSubsetOf(otherSet){
        if(this.size() > otherSet.size()) return false;

        const values = this.values(); 
        let isSubset = true;
        values.forEach(value=>{
            if(!otherSet.has(value)){
                isSubset= false;
                return isSubset;
            }
        })


        return isSubset;
    }

}


module.exports = Set_;