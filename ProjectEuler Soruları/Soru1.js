//Project Euler Soru Cevapları

/* Soru1
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/


function asalFactors (number){ 
    var factors= [],
        bölen= 2 
   
    while (number>2){

        if (number % bölen == 0){
            factors.push(bölen);
            number = number/bölen;    
        }
        else {
            bölen++
        }
    }
  

    return factors
}

let getAllAsallar = []
i=2
while (i<2000000){
    if (asalFactors(i).length == 1){
        getAllAsallar.push(i)
    }
    i++
}    
let sum = getAllAsallar.reduce((x,y) => x + y) - 2
console.log(sum)







