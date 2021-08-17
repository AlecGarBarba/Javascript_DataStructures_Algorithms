const Stack = require('./stack');

const baseConverter= (decimalNumber,base)=>{
    const remStack = new Stack();
    const digits ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decimalNumber;
    let remainder;
    let baseString='';
    if(base < 2 || base >36) return 'invalid base';
    if(decimalNumber ==0) return '0';
    while(number>0){
        remainder = Math.floor(number% base);
        remStack.push(remainder);
        number = Math.floor(number/base);
    }

    while(!remStack.isEmpty()){
        
        baseString+= digits[remStack.pop()];
    }

    return baseString;
    
}

console.log(baseConverter(10,2));
console.log(baseConverter(10,10));
console.log(baseConverter(10,16));