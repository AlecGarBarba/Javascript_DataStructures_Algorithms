const Stack = require('./stack');

const decimalToBinary=(decimalNumber)=>{
    const stack = new Stack();
    let number=decimalNumber;
    let binaryString='';
    if(decimalNumber==0){
        return '0';
    }
    while(number>0){ 
        number%2==0? stack.push(0)  : stack.push(1) ;
        number=Math.floor(number/2); 


        
    }
    while(!stack.isEmpty()){
        binaryString+= stack.pop().toString();
    }

    return binaryString;

}


for(let i=0;i<=20;i++){
    console.log(decimalToBinary(i));
}