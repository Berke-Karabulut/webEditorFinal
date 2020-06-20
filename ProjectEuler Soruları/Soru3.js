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