//Christopher Campisi
//Instructor Jessica Garlic
//SDI 1409
//Project 1

//Designing a simple DigiPet app

//Declaring global variables
var numHunger = 75;
var strName = "Bob";
var boolHungry = true;
var finalHunger;
var guess;

//Prompt
strName = prompt("What do you want to name your pet?");

//Procedure
console.log("Welcome to DigiPet! The game where you take on the challenge of raising your very own digital pet!");
console.log("You have just walked out of the store with a brand new keychain.  The keychain is your digital pet " + strName + ".");

//Confirm for input
boolHungry = confirm("Do you want to feed your pet?");
//Bool function
finalHunger = feedStatus(boolHungry, numHunger);

guess = guessGame(prompt("Your pet wants to play a game with you. It wants you to choose a number 1-10."));

console.log(myOutput(guess, boolHungry));

//global

//declare variables

//prompt for play game

//procedure

//Feed again?
//If yes then feed.
//confirm (bool status, hunger level)
	//confirm argument sent to bool function
		//bool function call
function feedStatus(feedBool, hungerLevel)
{
	var feedingTime = true;
	while(feedingTime == true)
	{
		console.log("You check to see if your pet is hungry.");
		if( feedBool == true  && hungerLevel < 100)
		{
			console.log("Yes your pet is hungry. You feed your pet a cookie.");
			hungerLevel+= 20;
			// testing hunger level condition console.log(hungerLevel);
		}
		else
		{
			console.log("Your pet is full! No more food!");
			feedingTime = false;
			//condition breaks out of loop
			
		}
		
	}
	return false;
	
}

function guessGame(yourGuess)
{
	var petGuess = Math.floor((Math.random() * 10) + 1);
	var guessStatus;
	var guessNum = 1;
	var guessedRight = false;
	
	while(guessedRight != true)
	{
		if(yourGuess == petGuess)
		{
			console.log ("You guessed right! The number your pet was thinking of was " + petGuess + ".");
			guessStatus = "Guessed Correctly in " + guessNum + " attempts.";
			guessedRight = true;
		}
		else
		{
			console.log("Your guess was wrong.");
			guessNum++;
			yourGuess = prompt("Guess # " + guessNum + ": Guess again 1-10!");
		}
	}
	return guessStatus;
	
}

function myOutput(guessStatus, boolHungry)
{
	var output = guessStatus;
	output += "\nIs pet hungry: " + boolHungry;
	return output;
}
//number function call
	//number argument
		//
	//return number
//string function
	//return string


