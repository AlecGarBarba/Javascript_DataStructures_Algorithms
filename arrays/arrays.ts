/*const/let variableName <type>/<type>[] or {}*/
const ts_numbers : number[] = [1,2,3,4,5,6,7,8];

interface Person{
    name: string,
    age: number,
}

const tsFriends = [
    {name: "Johny", age: 32},
    {name:"Lindsay", age: 29},
    {name:"Robert", age: 30}
];

const comparePersonTs = (a: Person, b:Person)=>{ //This is when the interface comes into play
    if(a.age > b.age){
        return 1;
    }else if (a.age < b.age){
        return -1;
    }
    return 0;
}


console.log(tsFriends.sort(comparePersonTs))