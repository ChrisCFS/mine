//Christopher Campisi
//SDI 1409
//Assignment 3

//JSON variables
var assignInfo = '{"name":"Link","class":"Ranger","title":"Hero"}'
var obj = JSON.parse(assignInfo);
var boolWin = false;
var myMap = [	["*", "*", "*", "*", "*", "*"],
				["*", "X", "*", "*", "*", "*"],
				["*", " ", "*", "*", "*", "*"],
				["*", " ", " ", " ", " ", "*"],
				["*" ,"*", "*", "*", " ", "*"],
				[" ", " ", "*", " ", " ", "*"],
				[" ", "*", "*", " ", "*", "*"],
				["*", " ", " ", " ", "*", "*"],
				["F", " ", "*", "*", "*", "*"]];
var mapDisplay = "\n";
var message = "";
var movements = 0;

var playerPosition = [1, 1];

console.log("Welcome Adventurer! You have been stranded in a forest and must make your way out!");
console.log("Follow the instructions to navigate through the forest. The game only completes once you are at the finish, which is marked by an F.");
console.log("Good Luck!");

while(boolWin == false)
{
	console.log(displayMap(myMap));
	message = playerMove(playerPosition, message);
	boolWin = finishLine(playerPosition, message);
	movements = numberofMoves(movements);
	
	//display user data stored in JSON format
	console.log("Name: " + obj.name);
	console.log("Character Class: " + obj.class);
	console.log("Local Title: " + obj.title);

}

console.log(displayMap(myMap));
console.log("You have won! Congratulations!");
console.log("You reached the end in " + movements + " moves!");

//array function
//builds map info into map variable and then returns its display.
function displayMap(myMap)
{
	var map = "\n";
	 for (var i = 0; i < 9; i++)
 	 {
	 	for (var j = 0; j < 6; j++)
	 	{
			 map += myMap[i][j];
	 	}
	 map += "\n";
 	 }
 	 return map;
}

//string function
function playerMove(playerPosition, message)
{
	var playerDirection;
	var directionPrompt = "Choose a direction to go. \nU: Up \nD: Down \nL: Left \nR: Right";
	var errorMessage = "";
	playerDirection = prompt(message + "\n" + directionPrompt);
	if(playerDirection == 'D')
	{
		if(myMap[playerPosition[0]+1][playerPosition[1]] != "*")
		{
			errorMessage = "You moved Down!";
			myMap[playerPosition[0]][playerPosition[1]] = " ";
			playerPosition[0] += 1;
			myMap[playerPosition[0]][playerPosition[1]] = "X";
		}
		else
		{
			errorMessage = "Not a valid move!";
		}
	}
	else if(playerDirection == 'U')
	{
		if(myMap[playerPosition[0]-1][playerPosition[1]] != "*")
		{
			errorMessage = "You moved Up!";
			myMap[playerPosition[0]][playerPosition[1]] = " ";
			playerPosition[0] -= 1;
			myMap[playerPosition[0]][playerPosition[1]] = "X";
		}
		else
		{
			errorMessage = "Not a valid move!";
		}
	}
	else if(playerDirection == 'L')
	{
		if(myMap[playerPosition[0]][playerPosition[1]-1] != "*")
		{
			errorMessage = "You moved Left!";
			myMap[playerPosition[0]][playerPosition[1]] = " ";
			playerPosition[1] -= 1;
			myMap[playerPosition[0]][playerPosition[1]] = "X";
		}
		else
		{
			errorMessage = "Not a valid move!";
		}
	}
	else if(playerDirection == 'R')
	{
		if(myMap[playerPosition[0]][playerPosition[1]+1] != "*")
		{
			errorMessage = "You moved Right!";
			myMap[playerPosition[0]][playerPosition[1]] = " ";
			playerPosition[1] += 1;
			myMap[playerPosition[0]][playerPosition[1]] = "X";
		}
		else
		{
			errorMessage = "Not a valid move!";
		}
	}
	return errorMessage;	
}

//bool function
function finishLine(playerPosition, myMap)
{
	if(myMap[playerPosition[0]][playerPosition[1]] != myMap[8][0])
	{
		return false;
	}
	else
	{
		return true;
	}
}

//number function
function numberofMoves(movements)
{
	return movements + 1;
}