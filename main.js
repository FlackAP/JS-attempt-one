

// Performs a reusable "if" check to compare if the value was empty or if the prompt was 
// cancelled returns a message stating a name must be given, and asks again.

function askForFirstName () {
	var name = prompt("What is your first name?");
	
	if (typeof(name) == "string" && name.length) {
		return name;
	}
	else {
		console.warn("I'm sorry, you must give me your name");
		return askForName();
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
		return askForName();
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


var mapLocation = {left: 0, right: 0};

var direction = locationChoice();

// prompts the user to make a decision on which direction to go.
function locationChoice() {
	var direction = prompt("Where would you like to go? Left or Right?");
		console.log("Where would you like to go? Left or Right?")
	if (direction.toLowerCase() == "left") {
		return mapLocation.left = (mapLocation.left + 1);
	}

	else if (direction.toLowerCase() == "right") {
		return mapLocation.right = (mapLocation.right + 1);
	}

	else {
		console.warn("Please enter a valid option");
		return locationChoice();
	}
}


// Function to pace you through the fight with zombie1
function fight1 () {
	var creatureDamage = Math.random();
	return zombie1.life = zombie1.life - creatureDamage * 100;
	console.log("You swing your " + heroCharacter.weapon + " at the creature and hit for " + creatureDamage*100% + "points of damage.");
	
	if (zombie1.life == 0) {
		console.log("The creature has been slain")
	}

	else {
		return fight1();
	}
}	



function zombieEncounter1 () {
	if ((mapLocation.left == 1) && (mapLocation.right == 0)) {

			alert("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")
			console.warn("Oh, no. 3 feet in front of you a shell of a creature shambles towards you. Groaning as it strains to stay upright it begins to claw at you. You must react!")

			var decision = prompt ("Do you run, or do you fight?");

			if (decision.toLowerCase() == "run") {
				var whatHappened = Math.random();
					
					if (whatHappened > .45) {
						console.log("You luckily got away unharmed.");
						return locationChoice();
					}

					else {
						console.log("The creature grabs you and drags you back. Looks like you'll have to fight after taking one point of damage.")
						return heroCharacter.life = (heroCharacter.life - 1)
						console.log("Life: " +heroCharacter.life);
						return fight1();
					}
			}
			
			else if (decision.toLowerCase() == "fight") {
				return fight1();	
			}
	}
	else {
		return locationChoice();
	}
}





zombieEncounter1()











// // // Creates an alert that asks the user why they would click the Link
// function whyOhWhy() {
// 	alert("Why would you click that?!?!?");
// }



// // // Prints variable value to the console. 
// console.log(firstName + " " + lastName);

// function welcomeUser() {
// 	document.write("Hi, " + firstName + " " + lastName + ". Let's rock and roll. Maybe we could " + hobby);
// }
