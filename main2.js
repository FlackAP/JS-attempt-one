function fight1 () {

	var creatureDamage = (Math.round(Math.random()*10))
	console.log("You swing your weapon at the creature and hit for " + creatureDamage + " points of damage.");
	return this.life = (this.life - creatureDamage);
}	




// Creates an object named zombie1 with a keyname life, value 10.
var zombie1 = {
	life: 10
};

// makes the fight1() function a method of zombie1



zombie1.fight = fight1;

// runs the results of running fight1()
console.log(zombie1.fight());
console.log(zombie1.life);