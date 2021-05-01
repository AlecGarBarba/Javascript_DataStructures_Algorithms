/*const/let variableName <type>/<type>[] or {}*/
var ts_numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var tsFriends = [
    { name: "Johny", age: 32 },
    { name: "Lindsay", age: 29 },
    { name: "Robert", age: 30 }
];
var comparePersonTs = function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    else if (a.age < b.age) {
        return -1;
    }
    return 0;
};
console.log(tsFriends.sort(comparePersonTs));
