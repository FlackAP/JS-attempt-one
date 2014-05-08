// Performs a reusable "if" check to compare if the value was empty or if the prompt was 
// cancelled returns a message stating a name must be given, and asks again.

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

// // Creates an empty object named heroCharacter
var heroCharacter = {life: 10};

// // Asks the user for their hobby and saves it to hobby
alert("What weapon will you use to defend yourself during the apocalypse?")

var heroWeapon = pickAWeapon();

function pickAWeapon () {
	var weapon = prompt("Pipe, axe or katana?");
	console.log("Pipe, axe or katana?");

	if (weapon.toLowerCase() == "pipe")
	{
		return heroCharacter.weapon = weapon;
		return heroCharacter.weaponDurability = 10;
	} 
	else if (weapon.toLowerCase() == "axe")
	{
		return heroCharacter.weapon = weapon;
		return heroCharacter.weaponDurability = 6;
	}
	else if (weapon.toLowerCase() == "katana") 
	{
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
console.log("The world has changed, and none for the better. After the horrific outbreak at that government bunker, the dead have been coming back to life.")
console.log("However, for better or for worse, the sun dawns on a new day for our hero. If humankind has any hope, our hero " + firstName + " and their trusty " + heroCharacter.weapon + ", must survive this nightmare.")


// Creates a swarm of zombies you must encounter

var zombie1 = {life: 10};
var zombie2 = {life: 10};
var zombie3 = {life: 10};
var zombie4 = {life: 10};
var zombie5 = {life: 10};
var zombie6 = {life: 10};


var mapLocation = {left: 0, up: 0};

var direction = locationChoice();

// prompts the user to make a decision on which direction to go.
function locationChoice() {
	var direction = prompt("Where would you like to go? Left or up?");
		console.log("Where would you like to go? Left or up?")
	if (direction.toLowerCase() == "left") {
		console.log("Your location is, Left: " + mapLocation.left + ", and up: " + mapLocation.up);
		mapLocation.left = (mapLocation.left + 1);
		encounterMap()
	}

	else if (direction.toLowerCase() == "up") {
		console.log("Your location is, Left: " + mapLocation.left + ", and up: " + mapLocation.up);
		mapLocation.up = (mapLocation.up + 1);
		encounterMap()
	}

	else {
		console.warn("Please enter a valid option");
		return locationChoice();
	}
}





function zombieEncounter1 () {

			alert("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")
			console.warn("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")

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
						fight1();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return fight1();	
			}

			else {
				alert("Please select a valid option");
				zombieEncounter1();
			}
}


// Function to pace you through the fight with zombie1

function fight1 () {
	var creatureDamage = Math.random();
	console.log("You swing your " + heroCharacter.weapon + " at the creature and hit for " + Math.round(creatureDamage*10) + " points of damage.");
	zombie1.life = (zombie1.life - (Math.round(creatureDamage*10)));


	isItDead();
}	

function isItDead () {

		if (zombie1.life > 0) {
			console.log("The creature still has " + zombie1.life + " hit points left");
			fight1();
		}

		else {
			alert("The creature has been slain");
			locationChoice();
		}
}


encounterMap();

function encounterMap () {
	if ((mapLocation.left == 1) && (mapLocation.up == 0)) {
		return zombieEncounter1();
	}
	else if ((mapLocation.left == 0) && (mapLocation.up == 2)) {
		return zombieEncounter4()
	}
	else if ((mapLocation.left == 1) && (mapLocation.up == 3)) {
		return zombieEncounter6();
	}
	else if ((mapLocation.left == 2) && (mapLocation.up == 2)) {
		return zombieEncounter5();
	}
	else if ((mapLocation.left == 2) && (mapLocation.up == 3)) {
		return zombieEncounter3();
	}
	else if ((mapLocation.left == 4) && (mapLocation.up == 0)) {
		return zombieEncounter2();
	}
	else {
		console.log("There's nothing here. Better keep looking.")
		locationChoice();
	}
}



// Below ye seek the lazy way to make "unique experiences". Hard coding each one
// because I'm too tired, and congested to make sense of doing it proper.


function zombieEncounter2 () {

			alert("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")
			console.warn("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")

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
						fight1();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return fight2();	
			}

			else {
				alert("Please select a valid option");
				zombieEncounter2();
			}
}

function fight2 () {
	var creatureDamage = Math.random();
	console.log("You swing your " + heroCharacter.weapon + " at the creature and hit for " + Math.round(creatureDamage*10) + " points of damage.");
	zombie2.life = (zombie2.life - (Math.round(creatureDamage*10)));


	isItDead2();
}	

function isItDead2 () {

		if (zombie2.life > 0) {
			console.log("The creature still has " + zombie2.life + " hit points left");
			fight1();
		}

		else {
			alert("The creature has been slain");
			locationChoice();
		}
}




function zombieEncounter3 () {

			alert("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")
			console.warn("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")

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
						fight1();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return fight3();	
			}

			else {
				alert("Please select a valid option");
				zombieEncounter3();
			}
}


function fight3 () {
	var creatureDamage = Math.random();
	console.log("You swing your " + heroCharacter.weapon + " at the creature and hit for " + Math.round(creatureDamage*10) + " points of damage.");
	zombie3.life = (zombie3.life - (Math.round(creatureDamage*10)));


	isItDead3();
}	

function isItDead3 () {

		if (zombie3.life > 0) {
			console.log("The creature still has " + zombie3.life + " hit points left");
			fight1();
		}

		else {
			alert("The creature has been slain");
			locationChoice();
		}
}


function zombieEncounter4 () {

			alert("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")
			console.warn("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")

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
						fight4();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return fight1();	
			}

			else {
				alert("Please select a valid option");
				zombieEncounter4();
			}
}

function fight4 () {
	var creatureDamage = Math.random();
	console.log("You swing your " + heroCharacter.weapon + " at the creature and hit for " + Math.round(creatureDamage*10) + " points of damage.");
	zombie4.life = (zombie4.life - (Math.round(creatureDamage*10)));


	isItDead4();
}	

function isItDead4 () {

		if (zombie1.life > 0) {
			console.log("The creature still has " + zombie1.life + " hit points left");
			fight4();
		}

		else {
			alert("The creature has been slain");
			locationChoice();
		}
}


function zombieEncounter5 () {

			alert("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")
			console.warn("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")

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
						fight1();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return fight5();	
			}

			else {
				alert("Please select a valid option");
				zombieEncounter5();
			}
}


function fight5 () {
	var creatureDamage = Math.random();
	console.log("You swing your " + heroCharacter.weapon + " at the creature and hit for " + Math.round(creatureDamage*10) + " points of damage.");
	zombie5.life = (zombie5.life - (Math.round(creatureDamage*10)));


	isItDead5();
}	

function isItDead5 () {

		if (zombie1.life > 0) {
			console.log("The creature still has " + zombie5.life + " hit points left");
			fight5();
		}

		else {
			alert("The creature has been slain");
			locationChoice();
		}
}






function zombieEncounter6 () {

			alert("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")
			console.warn("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")

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
						fight1();
					}
			}

			else if (decision.toLowerCase() == "fight") {
				return fight1();	
			}

			else {
				alert("Please select a valid option");
				zombieEncounter6();
			}
}





function fight6 () {
	var creatureDamage = Math.random();
	console.log("You swing your " + heroCharacter.weapon + " at the creature and hit for " + Math.round(creatureDamage*10) + " points of damage.");
	zombie6.life = (zombie6.life - (Math.round(creatureDamage*10)));


	isItDead();
}	

function isItDead6 () {

		if (zombie1.life > 0) {
			console.log("The creature still has " + zombie6.life + " hit points left");
			fight6();
		}

		else {
			alert("The creature has been slain");
			locationChoice();
		}
}























