using System;
					
public class Program
{
	public static void Main()
	{
		var input = 10254;
		NumberToWords(input);		
	}
	
	public static string NumberToWords(int input) {
		const string[] units = new string[] {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
        const string[] two_digit = new string[] {"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninteen"};
		const string[] tens = new string[] {"ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};
		const string[] powers = new string[] {"hundred", "thousand"};
		
        if(input < 0) {
            throw new InvalidArgumentException("input");
        } 
        if(input < 10) return units[number];
        if(input < 20) return units[number-10];


	}
}