//Christopher Campisi
//SDI 1408
//Project 4
//Aug 28 2014

var input;

//Test for function 1
//input = prompt("Enter a phone number in xxx-xxx-xxxx format.");
//console.log("Is the input a valid phone number: " + phoneTest(input));

//Test for Function 2
//input = prompt("Enter an email address in john@contoso.com; format.");
//console.log("Is the input a valid email address: " + emailTest(input));

//Output for Function 3
//input = prompt("Enter a valid website beginning with http:// or https://");
//console.log("This this a valid website address: " + urlTest(input));

//Output for Function 4
input = prompt("Enter an all lowercase word.");
console.log("Your corrected word: " + upperTest(input));

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

//Function 3 is this string a URL
function urlTest(urlAdd)
{
	var https = urlAdd.substring(0, 8);
	var http = urlAdd.substring(0, 7);
	if(http == "http://")
	{
		console.log("Prefix Entered: " + http);
		console.log("Valid unsecured website address.");
		return true;
	}
	else if(https == "https://")
	{
		console.log("Prefix Entered: " + https);
		console.log("Valid secured website address.");
		return true;
	}
	//by default returning false if it does not have the above required prefix.
	console.log("Invalid format. Make sure you enter http:// or https://");
	return false;
}

//Function 4 returns a string with the first character uppercase
function upperTest(word)
{
	//word = word.toUpperCase();
	var wordEnd = word.length
	var fChar = word[0].toUpperCase();
	word = fChar + word.substring(1, wordEnd);
	return word;
}