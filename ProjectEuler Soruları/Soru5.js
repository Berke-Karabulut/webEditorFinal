public class Prob50 {
    public Prob50() {
    }
    public static boolean IfPrime(int AnInteger) throws IOException, UnknownHostException
    {
        boolean prime = true;
        int upperBound = AnInteger;
        try {
            for (int i = 2; i < upperBound/2+1; i++) {
                if ( (AnInteger % i) == 0 ) {
                    prime = false;
                    break;
                }               
            }
        }
        catch (Exception e)
        {
                System.out.println("Method: IfPrime");
                e.printStackTrace();
        }
        return prime;
    }
    
    public static void main(String[] args) {
        Prob50 prob50 = new Prob50();
        try {
            ArrayList prime = new  ArrayList();
            int upperBound = 1000000;
            for (int i = 2; i< upperBound; i++) {
                if(IfPrime(i)) {
                    prime.add(i); 
                }
            }
            
            int len = prime.size();
            int S = 0;
            int sMax = 0;
            int iMax = 0;
            int jMax = 0;
            for (int i = 0; i < len; i++){
                S = 0;
                for (int j = 0; j < len-i; j++){
                    S += (Integer) prime.get(i+j);
                    if (S > (Integer) prime.get(len-1)) {
                       break;
                    }
                    else if (IfPrime(S) && (j > jMax)) {
                        sMax = S;
                        iMax = i;
                        jMax = j;
                    }
                }
            }
            System.out.println("Total number of prime numbers below " + upperBound + " is " + prime.size());
            System.out.print("max_size is " + (jMax+1) + " and MaxSum = " + sMax + " =    ");
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }
}