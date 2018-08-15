using System;
					
public class Program
{
	public static void Main()
	{
		var a1 = new int[]{1,2,5,7};
		var a2 = new int[]{2,3,6,8,10};
		
		var output = Merge(a1, a2);	
        Console.WriteLine(string.Join(",", output))	;
	}
	
	public static int[] Merge(int[] a1, int[] a2) {
		int ai = 0, bi=0, oi = 0;
        var output = new int[a1.Length + a2.Length];
        for (oi = 0; ai < a1.Length || bi < a2.Length; oi++)
        {
			if(ai >= a1.Length){
                output[oi] = a2[bi];
                bi++;
			} else if(bi >= a2.Length) {
                output[oi] = a1[ai];
                ai++;
			} else if(a1[ai] < a2[bi]) {
                output[oi] = a1[ai];
                ai++;
            } else {
                output[oi] = a2[bi];
                bi++;
            }
        }
        return output;
	}
}