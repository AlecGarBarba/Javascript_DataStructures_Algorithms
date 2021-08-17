let fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] =1;
let nthNumber = 10000
let t0 = process.hrtime();
for(let i =2; i <nthNumber; i++){
    fibonacci[i] = fibonacci[i-1]+fibonacci[i-2]
}
let t1 =  process.hrtime(t0)

console.log(fibonacci)

console.log('Execution time (hr): %ds %dms', t1[0], t1[1] / 1000000)