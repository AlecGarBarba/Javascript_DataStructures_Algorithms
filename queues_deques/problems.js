const Queue = require('./queue');
const Deque = require('./deque');

const hotPotato=(elementsList)=>{
    const q = new Queue();
    const eliminatedList = [];

    for(let i =0; i<elementsList.length;i++){
        q.enqueue(elementsList[i]);
    }

    while(q.size()>1){
        for(let i =0; i<Math.round(Math.random()*q.size());i++){
            q.enqueue(q.dequeue())
        }
        eliminatedList.push(q.dequeue());
    }
    return { eliminated: eliminatedList, winner: q.dequeue() }
}

const names =['John', 'Jack','Camila','Ingrid','Tonto Rini', 'Carl'];
const result = hotPotato(names);

//result.eliminated.forEach(name=> console.log(`${name} was elminated from the hot potato game`));
//console.log(`The winner of the game is: ${result.winner}`)

const palindromeChecker=(string)=>{
    if(!string) return false;
    const deque = new Deque();
    const lowerString = string.toLocaleLowerCase().replace(' ','');
    let firstChar,lastChar;

    for(let i =0; i< lowerString.length;i++){
        deque.addBack(lowerString.charAt(i));
    }
    while(deque.size()>1 && isEqual){
        firstChar= deque.removeFront();
        lastChar= deque.removeBack();
        if(firstChar !== lastChar) return false;
    }
    return true;
}

console.log("",palindromeChecker(''));
console.log("not a palindrome",palindromeChecker('not a palindrome'));
console.log("Anita Lava LA TINA",palindromeChecker('Anita Lava LA TINA'));