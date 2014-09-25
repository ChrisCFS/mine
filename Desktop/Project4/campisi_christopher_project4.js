//Christopher Campisi
//SDI 1409
//Project 4

//Function 1
currency();

//Function 1 of the number list
function currency()
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
