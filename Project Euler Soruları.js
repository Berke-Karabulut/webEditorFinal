//Project Euler Soru Cevapları
//Soru 1
/*
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

Cevap : 6857


/* Soru 2 
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

*/
import java.math.BigInteger;
public class ProjectEuler20 {
    public static void;
    main(String, [], args) {
        BigInteger;
        factorial = BigInteger.valueOf(1);
        for (int; i = 1; i <= 100)
            ;
        i++;
        factorial = factorial.multiply(BigInteger.valueOf(i));
        int;
        sum = 0;
        for (int; i = 0; i < factorial.toString().length())
            ;
        i++;
        {
            int;
            j = Integer.parseInt(factorial.toString().substring(i, i + 
            sum += j;
        }
        System.out.println(sum);
    }
}

Cevap : 648

/* Soru3
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
*/

public class P30 {
    public static void main(String args[]) {
        long sum = 0;
        for (int i = 2; i < 10000000; ++i) {
            String digs = Integer.toString(i);
            long num = 0;
            for (int j = 0; j < digs.length(); ++j) {
                char c = digs.charAt(j);
                int digit = (int)(c-'0');
                int pow5 = digit*digit; // ^2
                pow5 = digit*pow5*pow5;  // digit*(digit^2)^2
                num += pow5;
            }
            if (num == i) {
                sum += i;
            }
        }
        System.out.println(sum);
    }
}

CEVAP : 443839





