//Christopher Campisi
//SDI 1408
//Project 4
//Aug 28 2014

var input;

//Test for function 1
//input = prompt("Enter a phone number in xxx-xxx-xxxx format.");
//console.log("Is the input a valid phone number: " + phoneTest(input));

//Test for Function 2
input = prompt("Enter an email address in john@contoso.com; format.");
console.log("Is the input a valid email address: " + emailTest(input));


//generic output
console.log("You entered: " + input);

//Function 1. Takes input of a phone number and determines if its in the right format 
//and has the correct length then returns true if that is the case so the function call
//statement can display if its valid or not.
function phoneTest(input)
{
	var stringStart;
	var stringTo;
	var areaCode;
	var secondSet;
	var thirdSet;
	
	//test to see if the separator was used.
	if(phoneNumber.indexOf('-') == -1)
	{
		console.log("Not a valid format. Does not include - to separate digits.");
		return false;
	}
	//Separate area code
	stringTo = phoneNumber.indexOf('-');
	areaCode = phoneNumber.substring(0, stringTo);
	//console.log(areaCode);
	
	//Separate second set of numbers
	stringStart = stringTo;
	stringTo = phoneNumber.lastIndexOf('-');
	secondSet = phoneNumber.substring(stringStart+1, stringTo);
	//console.log(secondSet);	
	
	//Separate last set of numbers
	stringStart = stringTo;
	stringTo = phoneNumber.length;
	thirdSet = phoneNumber.substring(stringStart+1, stringTo);
	//console.log(thirdSet);	
	
	if (areaCode.length == 3) 
	{
		if(secondSet.length == 3)
		{
			if(thirdSet.length == 4)
			{
				return true;
			}
			else
			{
				console.log("The last set is not a valid phone number format.");
				return false;
			}
		}
		//else for second number check
		else
		{
			console.log("The second set is not a valid phone number format.");
			return false;
		}
	}
	//else for area code check
	else
	{
		console.log("The first set is not a valid phone number format.");
		return false;
	}
//else for first if test phone number length
}

//Function 2 is supposed to test the formatting of an email address.
function emailTest(emailAdd)
{
	
	if(emailAdd.lastIndexOf('.') == -1)
	{
		console.log("Not a valid format. Does not include '.'");
		return false;
	}
	if(emailAdd.indexOf('@') == -1)
	{
		console.log("Not a valid format. Does not include '@'");
		return false;
	}
	//Use of lastIndexOf allows a person to have '.' as part of their email format.
	if(emailAdd.lastIndexOf('.') < emailAdd.indexOf('@'))
	{
		console.log("The '.' comes before '@'. Invalid Format.");
		return false;
	}
	
	//If the above conditions are false then the function automatically returns true.
	return true;
}