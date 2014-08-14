//Declaring variables used in story game.
var stringWarriorName = "Linkelos";
var stringWarriorTitle = "\"Warrior of the West Mounts\"";
var intGold = 400;
var intRiddleAnswer;

//Displaying default values
console.log("The warrior of the story's name:", stringWarriorName);
console.log("The warrior of the story's title:", stringWarriorTitle);
console.log("Default riddle answer: ", intGold);
console.log("Well we are going to begin.");

//Beginning story
alert("\tThe Riddle of the Sphinx");
console.log('You approach a tower that has the treasure you seek. The closer you get the the tower the more clear it becomes that a Sphinx guards your way. The sphinx with the face of a woman, the body of a lion, and the talons and wings of an eagle looks upon you with glee.');
console.log('“What brings you here?” She asks with a knowing smile.');
console.log('“I seek the Stones of Marendel.\” You proclaim. You are the greatest warrior of the Mountains to the West. You have nothing to fear.');
console.log('“I see,” she begins, bringing a long talon to her lips in thought. “And you believe it is here, in this tower?”');
console.log('Yes, it most certainly is! I was told by none other than this fellow!” You reach into the satchel that hangs at your waist to produce a head. Holding it by the hair you show of your morbid treasure to the Sphinx. “This is the head of Morgeth the Dark. Keeper of the Dark Secret. Before I sliced his head he lay before me the secrets of the Tower.”');

//Pausing to allow reader to view everything before printing more
alert('Press ok when you\'re done reading.');
console.log('“Yes, moving would be good.” You say with certainty.');
console.log('“I have been sitting here for ages and it is positively most difficult for me to get up with these old joints. I don’t really feel like moving. Perhaps if you were to amuse me I could do you this favor. Would you like to amuse me?” She smiles again, if you were a wiser man you would recognize that her smile has become dangerous. But you’re not. You debate just stabbing her, but maybe her idea will take less work.');
console.log('“Very well, what will you have of me.” You kind of want to stab her, so your out your sword and then thrust its blade into the ground before you, resting your hands on the hilt as if you’re just trying to get comfortable.');
console.log('“I have 2 questions for you master warrior, only 2. Answer these and you will entertain me greatly.” If possible her smile has become even more wicked. Still you do not notice.');
console.log('“Oh,” you start. This is going to be even easier than you thought it would be.”Let’s have it then, what are they?”');
console.log('With a smile that shows a great many sharp teeth she begins, \n”When you have me you want to share me. When you share me I no longer exist. What am I?”');

//Beginning Conditional Branching
intRiddleAnswer = prompt('1. A secret | 2. A note.');


//if player chooses the right answer
if (intRiddleAnswer == 1)
{
	//attempted to clear console...failed
	console.clear();
	console.log('"Oh good. A smart one. I haven\'t had one of those in ages." She giggles in a sinister manner. Until now you weren\'t sure a giggle could be sinister, but there you have it.');
	console.log('With a sudden start she shifted very close to you. Her leathery human face resting against your own face. Startled you gasp and step backwards, letting your sword fall to the ground.');
	console.log('"My next question is, are you willing to part with 500 gold to stay alive?"');
	//if player chooses the right answer and has more than 500 gold
	if (intGold > 500)
	{
		console.log('You quickly drop your sword and reach for your purse, tossing out 500 gold with shaky hands');
		intGold = intGold - 500;
		console.log('It appears you only have ' + intGold + ' gold left.');
	}
	//if player chooses the right answer and has less than 500 gold
	else
	{
		console.log('Sadly and a little embarrassed you reply no,  you do not have 500 gold.');
		console.log('"Oh dear I\'m going to have to kill you anyways and take it all.');
		console.log('With that she proceeds to tear you apart. You really wish you saved your money instead of buying that new tv... er wait what?');
		intGold = intGold - intGold;
		console.log('Not that you care, but now that your dead and she has your gold you are left with ' + intGold + ' gold.');
	}
	
}
//if player chooses the wrong answer
else 
{
	console.log('"I\'m afraid you have lost." Her voice taking on a threatening tone. She charges forth swatting you with one large talon. Your sword flies from your grip as you crash to the ground hard.');
	console.log('She doesn\'t wait for you to catch your breath as she grabs one of your legs and lifts you up. "Who was it that I had the pleasure of taking as a meal? Tell me your name morsel." Saliva drips from her moist lips as she bares her fangs smiling.');
	console.log('Was it Legolas? No it was Linkelos right?');
	//if player chooses the wrong answer and has the name Linkelos (after link and legolas)
	if (stringWarriorName == "Linkelos")
	{
		console.log('"I am going to have a lot of fun eating you ' + stringWarriorName + '".');
	}
	//if player chooses the wrong answer and does not have the name Linkelos
	else
	{
		console.log('"Well, ' + stringWarriorName + ' you are going to be delicious. I can tell."');
		console.log("I would like say you had a quick and painless death, but no, you really didn't.");
	}
	
}
	