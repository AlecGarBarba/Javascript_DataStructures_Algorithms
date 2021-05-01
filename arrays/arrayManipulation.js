Array.prototype.insertFirstPosition = function (value){
    for (let i = this.length; i >=0;i--){
        this[i] = this[i-1];
    }
    this[0] = value;
}

let arr = [0,1,2,3,4,5,6,7,8]

arr.insertFirstPosition(-1);

//native way of doing this:
arr.unshift(-3,-2)

console.log(arr)

console.log("O(n) operation");

///Doing a pop manually

Array.prototype.removeLast = function (){
    for (let i=0; i< this.length;i++){
        this[i] = this[i+1]
    }
    this.length = this.length -2;
}

arr.removeLast();

console.log(arr)

console.log("splicing within an array")
arr = [0,1,2,3,4,5,6,7,8]
console.log(arr)

console.log("removing 3 elements at the 2nd index")
arr.splice(2,3)
console.log(arr)
console.log("adding the elements 10,11,12 at the position where it was eliminated")
arr.splice(2,0,10,11,12)
console.log(arr)
console.log("eliminating 10,11,12 and replacing it with 100,101,102")
arr.splice(2,3,100,101,102)
console.log(arr)
console.log(arr.toString())


/////////////////////////////////////////////////////////////////////////////////////////////7

//Joining arrays
const zero = 0;
const positiveNumbers = [1,2,3]
const negativeNumbers = [-3,-2-1]
let numbers = negativeNumbers.concat(zero,positiveNumbers)
console.log(numbers)


//is array even
let lotsANumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
const isEven = (x) =>  x % 2 === 0;
console.log("Is every num in previous array even?")
console.log(lotsANumbers.every(isEven))// stop at first false
console.log("Is some num in previous array even?")
console.log(lotsANumbers.some(isEven))//stop at first true
console.log("iterate through every elem to see if it is even")
lotsANumbers.forEach(x => console.log(x%2 === 0))
console.log("map the result to an array")
isEvenArray = lotsANumbers.map(isEven)
console.log(isEvenArray)
console.log("filter every even number")
console.log(lotsANumbers.filter(isEven))
console.log("Now sum every odd value!")
isOddArray = lotsANumbers.filter(x => x%2 !== 0)
console.log(isOddArray.reduce((prev,actual)=> prev + actual)) //i wouldnt be so sure about that one jaja




////////////////////////////////////////ITERATORS//////////////////////////////////////////////////////
console.log(numbers)
let iterator = numbers[Symbol.iterator]();

for (const n of iterator){
    console.log(n)
}
//after iterating, everything will be undefined. 

let entries = numbers.entries();

for (const n of entries){
    console.log(n)
}

///////////////////////////SORTING is EASY PEASY LEMON SQUEEZY

let rndmArray = [1,6,2,10,-1,45,124,90]

//array sort function assumes that they are only strings. WE can customize our sorting criterya

rndmArray.sort((a,b) => a-b) //asc ord

console.log(rndmArray)

//other type of custom sorting

const friends = [
    {name:"John", age: 30},
    {name:"Christine", age: 27},
    {name:"Daniel", age: 33}
]

const comparePerson= (a,b)=>{
    if(a.age < b.age){
        return -1
    }else if (b.age > a.age){
        return 1
    }
    return 0
}

console.log(friends.sort(comparePerson))


//String sorting

names = ["Ana", "John", "ana", "john"];

console.log(names.sort((a,b)=>{
    if(a.toLowerCase() < b.toLowerCase()){
        return -1
    }else if (b.toLowerCase() > a.toLowerCase()){
        return 1
    }
    return 0
}))
//If we want lowercase to come first: (applies the same to accented characters)
console.log(names.sort((a,b)=>a.localeCompare(b)))
