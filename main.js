// Performs a reusable "if" check to compare if the value was empty or if the prompt was 
// cancelled returns a message stating a name must be given, and asks again.
function gameTime (){
function askForFirstName () {
	var name = prompt("What is your first name?");

	if (typeof(name) == "string" && name.length) {
		return name;
	}
	else {
		console.warn("I'm sorry, you must give me your name");
		return askForFirstName();
	}
}

// asks the user for their first name and saves the value to firstName after checking for null values
var firstName = askForFirstName();

// Takes the input value and converts it to all lowercase. Redfines the input as the 
// uppercase form. Then takes the newly created lower case form, and capitalizes 
// only the first letter. 
firstName = firstName.toLowerCase();
firstName = firstName[0].toUpperCase()+firstName.slice(1, firstName.length);


// Same function as first name, but with last name.
function askForLastName () {
	var name = prompt("What is your last name?");

	if (typeof(name) == "string" && name.length) {
		return name;
	}
	else {
		console.warn("I'm sorry, you must give me your name");
		return askForLastName();
	}
}

// // Asks the user for their last name and stores that in lastName
var lastName = askForLastName();


// // Takes the value and turns it into all uppercase text
lastName = lastName.toLowerCase();
lastName = lastName[0].toUpperCase() + lastName.slice(1, lastName.length);

// // Creates an object named heroCharacter with 25 "life"
heroCharacter = {life: 15};

// // Asks the user for their hobby and saves it to hobby
alert("What weapon will you use to defend yourself during the apocalypse?")

var heroWeapon = pickAWeapon();


// askes the user to select a weapon. durability has not been built in yet.
function pickAWeapon () {
	var weapon = prompt("Pipe, axe or katana?");
	console.log("Pipe, axe or katana?");

	if (weapon.toLowerCase() == "pipe")
	{	
		alert("A pipe. Nice choice, sturdy and reliable. The heft makes it powerful.")
		return heroCharacter.weapon = weapon;
		return heroCharacter.weaponDurability = 10;
	} 
	else if (weapon.toLowerCase() == "axe")
	{
		alert("An axe. Quick, lightweight, multi-functioned, you're in this for the long haul.")
		return heroCharacter.weapon = weapon;
		return heroCharacter.weaponDurability = 6;
	}
	else if (weapon.toLowerCase() == "katana") 
	{
		alert("A katana? Really? Ok. Well, when you chop your own arm off, don't say you weren't warned.")
		return heroCharacter.weapon = weapon;
		return heroCharacter.weaponDurability = 8;
	}
	else {
		console.warn("I'm sorry, you must make a valid selection");
		return pickAWeapon();
	}
}


// // Adds the firstName, lastName and userWeapon keynames and values of the user's input
heroCharacter.heroFirstName = firstName;
heroCharacter.heroLastName = lastName;


// sets the "plot"
alert("The world has changed, and none for the better. After the horrific outbreak at that government bunker, the dead have been coming back to life.")
alert("However, for better or for worse, the sun dawns on a new day for our hero. If humankind has any hope, our hero, " + firstName + ", with only his " + heroCharacter.weapon + " and the wits about 'em, must survive this nightmare.")


// Creates a swarm of zombies you must encounter

zombie1 = {
	life: 10, 
	fight: fight1,
	encounter: zombieEncounter1,
	lifeCheck: isItDead,
	heroCheck: areYouDead
}

zombie2 = {
	life: 10,
	fight: fight1,
	encounter: zombieEncounter2,
	lifeCheck: isItDead,
	heroCheck: areYouDead
}

zombie3 = {
	life: 10,
	fight: fight1,
	encounter: zombieEncounter3,
	lifeCheck: isItDead,
	heroCheck: areYouDead
};

zombie4 = {
	life: 10,
	fight: fight1,
	encounter: zombieEncounter4,
	lifeCheck: isItDead,
	heroCheck: areYouDead
}

zombie5 = {
	life: 10,
	fight: fight1,
	encounter: zombieEncounter5,
	lifeCheck: isItDead,
	heroCheck: areYouDead
}

zombie6 = {
	life: 10,
	fight: fight1,
	encounter: zombieEncounter6,
	lifeCheck: isItDead,
	heroCheck: areYouDead
}


var mapLocation = {left: 0, up: 0};

var direction = locationChoice();

// prompts the user to make a decision on which direction to go.
function locationChoice() {
	var direction = prompt("Where would you like to go? Left or up?");
		console.log("Where would you like to go? Left or up?")
	
	if	(direction.toLowerCase() == "left") {
		mapLocation.left = (mapLocation.left + 1);
		console.log("Your location is, Left: " + mapLocation.left + ", and up: " + mapLocation.up);
		encounterMap()
	}

	else if (direction.toLowerCase() == "up") {
		mapLocation.up = (mapLocation.up + 1);
		console.log("Your location is, Left: " + mapLocation.left + ", and up: " + mapLocation.up);
		encounterMap()
	}

	else {
		console.warn("Please enter a valid option");
		locationChoice();
	}
}




// describes the pathway for the first zombie encounter. You may attempt to run or fight.
function zombieEncounter1 () {

			alert("Oh, no. 3 feet in front of you, a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")
			console.warn("Oh, no. 3 feet in front of you, a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")

			var decision = prompt ("Do you run, or do you fight?");

			if (decision.toLowerCase() == "run") {
				var whatHappened = Math.random();

					if (whatHappened > .8) {
						console.log("You luckily got away unharmed.");
						return locationChoice();
					}

					else {
						console.log("The creature grabs you and drags you back. Looks like you'll have to fight after taking one point of damage.");
						alert("The creature grabs you and drags you back. Looks like you'll have to fight after taking one point of damage.")
						heroCharacter.life = (heroCharacter.life - 1);
						console.log("Life: "+ heroCharacter.life);
						zombie1.fight();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return zombie1.fight();	
			}

			else {
				alert("Please select a valid option");
				zombieEncounter1();
			}
}


// Function to pace you through the fight with zombie1

function fight1 () {
	var creatureDamage = Math.round(Math.random()*10);
	console.log("You swing your " + heroCharacter.weapon + " at the creature and hit for " + creatureDamage + " points of damage.");

	var creatureAttack = Math.random();

		// if the "roll" is high enough, creature will attack your health
		if (creatureAttack > .3) {
			var creatureAttackRoll = Math.round((Math.random()*10)/4);
			heroCharacter.life = heroCharacter.life - creatureAttackRoll;		
			console.log ("The creature has struck you and done " + creatureAttackRoll + " points of damage.")
			console.log ("Your health is currently: " + heroCharacter.life)
			this.heroCheck();
		}

		
	this.life = (this.life - (Math.round(creatureDamage)));
	this.lifeCheck();
	
}	

// checks if you still have hit points
function areYouDead () {
	if ((heroCharacter.life == 0) || (heroCharacter.life < 0)) {
		console.log ("Your health has dipped too low and our hero, " + firstName + " " + lastName +" has died. So sad")
		return endGame();
	}
	else this.fight()
}


//checks to see whether or not the zombie has been killed.
function isItDead () {

	if (this.life > 0) {
		console.log("The creature still has " + this.life + " hit points left");
		return this.fight()
	}

	else {
		console.log ("The creature has been slain");
		console.log("Your life is currently at " + heroCharacter.life + " points");
		alert("The creature has been slain");
		return locationChoice();
	}
}

// if you no longer have hit points pops up an alert to tell you that you have died.

function endGame() {
	alert("You have died. Please refresh your browser to try again.")
	throw new UserException("Something went horribly wrong if you won. Please refresh.");
}


// checks specific coordinates on the map for special events
// zombie encounters
// [0, 2, zombieEncounter4()],
// [1, 0, zombieEncounter1()],
// [1, 3, zombieEncounter6()],
// [2, 2, zombieEncounter5()],
// [2, 3, zombieEncounter3()],
// [4, 0, zombieEncounter2()],

function encounterMap () {
	if ((mapLocation.left == 1) && (mapLocation.up == 0)) {
		return zombie1.encounter();
	}
	else if ((mapLocation.left == 0) && (mapLocation.up == 2)) {
		return zombie4.encounter()
	}
	else if ((mapLocation.left == 1) && (mapLocation.up == 3)) {
		return zombie6.encounter();
	}
	else if ((mapLocation.left == 2) && (mapLocation.up == 2)) {
		return zombie5.encounter();
	}
	else if ((mapLocation.left == 2) && (mapLocation.up == 3)) {
		return zombie3.encounter();
	}
	else if ((mapLocation.left == 4) && (mapLocation.up == 0)) {
		return zombie2.encounter();
	}
	else if ((mapLocation.left == 5) || (mapLocation.up == 5)){
		console.log("Thank you for playing")
		console.log(firstName + " " + lastName + " - you have successfully survived with " + heroCharacter.life + " health points.");
		alert("Up ahead you see a building that's been walled off. People, walk the roofline. Real people! This could be your chance!")
		console.log("Up ahead you see a building that's been walled off. People, walk the roofline. Real people! This could be your chance!")
		alert(firstName + " " + lastName + " - you have successfully survived with " + heroCharacter.life + " health points.");
		// throw new UserException("Something went horribly wrong if you won. Please refresh.");
	}
	else {
		console.log("There's nothing here. Better keep looking.")
		locationChoice();
	}
}


function UserException(message) {
   this.message = message;
   this.name = "UserException";
}


// Below ye seek the lazy way to make "unique experiences". Hard coding each one
// because I'm too tired, and congested to make sense of doing it proper.


function zombieEncounter2 () {

			alert("Smoke fills the room, stingy your eyes and strainging your vision. Not a moment too soon you realize you're not alone. A hand reaches towards your face.")
			console.warn("Smoke fills the room, stingy your eyes and strainging your vision. Not a moment too soon you realize you're not alone. A hand reaches towards your face.")

			var decision = prompt ("Do you run, or do you fight?");

			if (decision.toLowerCase() == "run") {
				var whatHappened = Math.random();

					if (whatHappened > .75) {
						console.log("You luckily got away unharmed.");
						return locationChoice();
					}

					else {
						console.log("The creature grabs you and drags you back. Looks like you'll have to fight after taking one point of damage.");
						heroCharacter.life = (heroCharacter.life - 1);
						console.log("Life: "+ heroCharacter.life);
						zombie2.fight();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return zombie2.fight();	
			}

			else {
				alert("Please select a valid option");
				zombie2.encounter();
			}
}

// zombie3 encounter
function zombieEncounter3 () {

			alert("You stumble into a seemingly empty alley way. However, after a moment of silence a window near by shadows and a creature is after you.")
			console.warn("You stumble into a seemingly empty alley way. However, after a moment of silence a window near by shadows and a creature is after you.")

			var decision = prompt ("Do you run, or do you fight?");

			if (decision.toLowerCase() == "run") {
				var whatHappened = Math.random();

					if (whatHappened > .95) {
						console.log("You luckily got away unharmed.");
						return locationChoice();
					}

					else {
						console.log("The creature grabs you and drags you back. Looks like you'll have to fight after taking one point of damage.");
						heroCharacter.life = (heroCharacter.life - 1);
						console.log("Life: "+ heroCharacter.life);
						zombie3.fight();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return zombie3.fight();	
			}

			else {
				alert("Please select a valid option");
				zombie3.encounter();
			}
}


// Encounter and zombie4
function zombieEncounter4 () {

			alert("You can see a creature looming nearby. It might make sense to just take it out rather than sneaking around.")
			console.warn("You can see a creature looming nearby. It might make sense to just take it out rather than sneaking around.")

			var decision = prompt ("Do you sneak, or do you fight?");

			if (decision.toLowerCase() == "sneak") {
				var whatHappened = Math.random();

					if (whatHappened > .95) {
						console.log("You luckily got away unharmed.");
						return locationChoice();
					}

					else {
						console.log("The creature grabs you and drags you back. Looks like you'll have to fight after taking one point of damage.");
						heroCharacter.life = (heroCharacter.life - 1);
						console.log("Life: "+ heroCharacter.life);
						zombie4.fight();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return zombie4.fight();	
			}

			else {
				alert("Please select a valid option");
				zombie4.encounter();
			}
}

// Encounter and zombie5
function zombieEncounter5 () {

			alert("You knew the mall was a bad idea, but you came here anyway. As antipated, you're now under attack. ")
			console.warn("You knew the mall was a bad idea, but you came here anyway. As antipated, you're now under attack. ")

			var decision = prompt ("Do you run, or do you fight?");

			if (decision.toLowerCase() == "run") {
				var whatHappened = Math.random();

					if (whatHappened > .95) {
						console.log("You luckily got away unharmed.");
						return locationChoice();
					}

					else {
						console.log("The creature grabs you and drags you back. Looks like you'll have to fight after taking one point of damage.");
						heroCharacter.life = (heroCharacter.life - 1);
						console.log("Life: "+ heroCharacter.life);
						zombie5.fight();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return zombie5.fight();	
			}

			else {
				alert("Please select a valid option");
				zombie5.encounter();
			}
}

// Encounter and zombie6
function zombieEncounter6 () {

			alert("You walk through the front door of an old apartment building. Looks like it could be a good place to lay low for a while. Time to catch a quick snooze.")
			console.warn("You walk through the front door of an old apartment building. Looks like it could be a good place to lay low for a while. Time to catch a quick snooze.")
			heroCharacter.life = heroCharacter.life+5;
			alert("Resting has allowed you to regain some life. Your current life is at: " + heroCharacter.life);
			console.log("Your current life is at: " + heroCharacter.life);
			var decision = prompt ("Do you run, or do you fight?");

			if (decision.toLowerCase() == "run") {
				var whatHappened = Math.random();

					if (whatHappened > .95) {
						console.log("You luckily got away unharmed.");
						return locationChoice();
					}

					else {
						console.log("The creature grabs you and drags you back. Looks like you'll have to fight after taking one point of damage.");
						heroCharacter.life = (heroCharacter.life - 1);
						console.log("Life: "+ heroCharacter.life);
						zombie6.fight();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return zombie6.fight();	
			}

			else {
				alert("Please select a valid option");
				zombie6.encounter();
			}
}



} // closing bracket for the click event to activate the game




















