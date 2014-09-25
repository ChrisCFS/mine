//Christopher Campisi
//SDI 1409
//Project 4

secondFunction();

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