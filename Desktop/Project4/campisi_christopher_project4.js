//Christopher Campisi
//SDI 1409
//Project 4

thirdFunction();

//Function 1 of the number list
function firstFunction()
{
	var number = 100;
	var number2 = 50.235;
	console.log("The number is: " + number);

	number = number.toFixed(2);
	console.log("The number as currency is: $" + number);
	
	number = parseFloat(number).toFixed(3);
	console.log("The number with 3 decimal spots is: " + number);
	
	console.log("Second number is: " + number2);
	number2 = number2.toFixed(2);
	
	console.log("Number shortened to: " + number2);
}

//Function 2 of number list
function secondFunction()
{
	var number = "250";
	
	console.log(number + " is being displayed as a string.");
	
	number = parseInt(number);
	console.log(number);
}

//Function 3
function thirdFunction()
{
	var title = "the great escape artist";
	var newTitle = "";
	var temp;
	var t;
	var num = 1;
	
	console.log("Old Title: " + title);
	while(num != 2)
	{
		temp = title.slice(num,title.indexOf(" ")+1);
		t = title.charAt(0);
		t = t.toUpperCase();
		
		temp = t + temp;
		if(title.search(" ") == -1)
		{
			temp = t + title.slice(num, title.length);	
			num = 2;
		}
		newTitle = newTitle + temp;
			
		title = title.slice(title.indexOf(" ")+1, title.length);
		
	}
	console.log("New Title: " + newTitle);
}