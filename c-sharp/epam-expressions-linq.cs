using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

public class User {
    public string Name{get; set;}
    public string SurName{get; set;}
    public int Age {get; set;}
	
	public override string ToString() {
		return String.Format("Name: {0}, SurName: {1}, Age: {2}", Name, SurName, Age);
	}
}
		
public class Program
{
	public static void Main()
	{
        var col = new List<User>();
		col.Add(new User(){ Name="1", SurName = "ac", Age = 31 });
		col.Add(new User(){ Name="2", SurName = "vs", Age = 32 });
		col.Add(new User(){ Name="3", SurName = "Va", Age = 19 });
		col.Add(new User(){ Name="4", SurName = "aa", Age = 21 });
		col.Add(new User(){ Name="5", SurName = "Vz", Age = 39 });
				
        var dataSet = col.AsQueryable();
		var fn = prepareFilter().Compile();
		
		var output = dataSet.Where(x=> fn(x)).ToList();
		
		output.ForEach(x=>Console.WriteLine(x.ToString()));		
	}
	
    public static Expression<Func<User, bool>> prepareFilter() {
        Expression<Func<User, bool>> c1 = x => (x.Age > 30) && x.SurName.StartsWith("V");
		return c1;
    }
}