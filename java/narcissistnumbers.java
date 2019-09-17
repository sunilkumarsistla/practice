import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class NarcissitNumber
{
	public static void main (String[] args) throws java.lang.Exception
	{
	    int lim = 50000;
        System.out.println("narcissit numbers below " + lim + "\n");
	    for(int i = 1; i < lim; ++i) {
	        if(isGivenNumberNarcissist(i))
	            System.out.println(i);
	    }
	}
	
	public static int findNumberOfDigitsInGivenNumber(int num) {
	    int s = 0;
	    while(num > 0) {
	        num /= 10;
	        ++s;
	    }
	    return s;
	    
	    // log 10 of a number gives the number of digits in a number
	    //return (int)Math.log10(num) + 1;
	}
	
	public static int findNumberToGivenPower(int n, int p) {
	    if(p == 0) return 1;
	    int res = n;
	    while(--p > 0) {
	        res *= n;
	    }
	    return res;
	    
	    // method to find find power 
	    // return (int)Math.pow(n, p);
	}
	
	public static boolean isGivenNumberNarcissist(int n) {
	    int d = findNumberOfDigitsInGivenNumber(n);
	    int expectedNarcissistResult = n;
	    int s = 0;
	    while(n > 0) {
	        int r = n % 10;
	        s += findNumberToGivenPower(r, d);
	        n /= 10;
	    }
	    
	    return s == expectedNarcissistResult;
	}
}
