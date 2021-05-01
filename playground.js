//Por esto es importante saber cómo hacer estructuras de datos, wero.
//Se puede hacer con arreglos, objetos, o estructuras de datos customizadas
const isrValues= [
    {lowerValue: 0.01, upperValue:644.58,fee:0,excedentRatio: 0.0192},
    {lowerValue: 644.59, upperValue:5470.92,fee:12.38,excedentRatio: 0.0192},
    {lowerValue: 5470.93, upperValue:9614.65,fee:321.26,excedentRatio: 0.0640},
    {lowerValue: 9614.66, upperValue:11176.61,fee:772.10,excedentRatio: 0.0192},,
    {lowerValue: 11176.62, upperValue:13381.46,fee:1022.01,excedentRatio: 0.0192},
    {lowerValue: 13381.47, upperValue:26988.49,fee:1417.12,excedentRatio: 0.0192},
    {lowerValue: 26988.50, upperValue:644.58,fee:4323,excedentRatio: 0.0192}
]


const getISRFeeWithMap = (salariesArray)=>{
    const ISRFeeProperties=[];
    salariesArray.map(salary =>{
        if(salary <= 644.58 && salary>0){
            ISRFeeProperties.push(isrValues[0])

        }else if(salary <= 5470.92){
            ISRFeeProperties.push(isrValues[1])
        }else if(salary <= 9614.66){
            ISRFeeProperties.push(isrValues[2])
        }
        else if(salary <= 11176.62){
            ISRFeeProperties.push(isrValues[3])
        }
        else if(salary <= 13381.47){
            ISRFeeProperties.push(isrValues[4])
        }
        else if(salary <= 26988.50){    
            ISRFeeProperties.push(isrValues[5])
        }
        else if(salary <= 42537.58){
            ISRFeeProperties.push(isrValues[6])
        }else{ ///tú entiendes, pon todos los  valores que sean antes de tu último else
            ISRFeeProperties.push("invalid"); // o lo que quieras poner para que tú sepas que ese sueldo no es válido
        }
    })
    return ISRFeeProperties;
}

const getISRFeeWithFor = (salariesArray)=>{
    const ISRFeeProperties=[];
    for(salary of salariesArray){
        if(salary <= 644.58 && salary>0){
            ISRFeeProperties.push(isrValues[0])

        }else if(salary <= 5470.92){
            ISRFeeProperties.push(isrValues[1])
        }else if(salary <= 9614.66){
            ISRFeeProperties.push(isrValues[2])
        }
        else if(salary <= 11176.62){
            ISRFeeProperties.push(isrValues[3])
        }
        else if(salary <= 13381.47){
            ISRFeeProperties.push(isrValues[4])
        }
        else if(salary <= 26988.50){    
            ISRFeeProperties.push(isrValues[5])
        }
        else if(salary <= 42537.58){
            ISRFeeProperties.push(isrValues[6])
        }else{ ///tú entiendes, pon todos los  valores que sean antes de tu último else
            ISRFeeProperties.push("invalid"); // o lo que quieras poner para que tú sepas que ese sueldo no es válido
        }
    }
    return ISRFeeProperties;

}

const salaries = [2000,4000,15000,20000,40000];
console.log("salaries:",salaries)
console.table(getISRFeeWithMap(salaries))
console.table(getISRFeeWithFor(salaries));

