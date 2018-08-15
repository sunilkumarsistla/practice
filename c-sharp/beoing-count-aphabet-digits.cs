using System;
					
public class Program
{
	public static void Main()
	{
		var input = "az$5";
		Traverse(input);		
	}
	
	public static void Traverse(string input) {
		
		int cc =0, dc = 0;
		int a = (int)'a', z = (int)'z', A = (int)'A', Z = (int)'Z', ze = (int)'0', n = (int)'9';
		
		for(var i = 0;i<input.Length;i++)
		{
			var c = (int)input[i];
			if((c >= a && c <= z) ||(c >= A && c <= Z))
				cc++;
			else if(c >= ze && c <= n)
				dc++;
		}
		
		Console.WriteLine("d: {0}, c: {1}", dc, cc);
		
	}
}