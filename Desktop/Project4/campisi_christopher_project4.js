//Christopher Campisi
//SDI 1409
//Project 4

fifthFunction();

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

//Function 3 string list: title-case check
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

//Function 4 string looking for phone number format
function fourthFunction()
{
	var number;
	number = prompt("Enter a phone number in this format: xxx-xxx-xxxx");
	
	//checks to see if - is at the 4th index of number.
	if(number.indexOf("-") == 3)
	{
		console.log("First segment is correct.");
		//checks to see if - is at the 8th index of number.
		if(number.lastIndexOf("-") == 7);
		{
			console.log("Second segment is correct.");
			//if everything else is correct and the phone number is correct length
			if(number.length = 12)
			{
				console.log("Phone number is correct length");
			}
			else
			{
				console.log("Phone number is not the correct length");
			}
		}
		//does not allow me to have an else for 1st nested if statement. comes up with a syntax error.
		/*else
		{
			console.log("Second dash(-) is not in the correct spot");
		}*/
	}
	else
	{
		console.log("First dash(-) is not in the correct spot");
	}
	console.log("Phone number has correct format.");
	
}

//Function 5 Array - find total number value
function fifthFunction()
{
	var myArray = [1, 2, 3, 4, "Bob", 5, 6, 7, 8, 9, "John", 10];
	var total = 0;
	
	for (var i = 0; i < myArray.length; i++)
	{
	 	if(isNaN((myArray[i] / 1)) == false)
	 	{
	 		total += myArray[i];
	 	}
	}
	console.log("Total: " + total);
}
