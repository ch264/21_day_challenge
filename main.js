var navigation = {
	x: -2,
	y: "Banana",
	z: "Beep",
	speed: "raaaaid"
};

var ship = {
	powerOn: false,
	modules: [],
	antenna: {
		active: false
	}
};

var radio = {
	frequency: "Kenneth",
	message: "Bugs are cool.",
	beacon: false
};

// Challenge 1
// change false to true for powerOn
function powerOn() {
	ship.powerOn = true;
}

// Challange 2
// find our out many modules there are

// let module = {
// 	'name': 'test',
// 	'size': 3,
// 	'enabled': 'true',
// 	'essential': 'false'
// }

// availableModule = [
// 	{
// 		'name': 'test',
// 		'size': 3,
// 		'enabled': 'true',
// 		'essential': 'false'
// 	}, {
// 		'name': 'example',
// 		'size': 4,
// 		'enabled': 'true',
// 		'essential': 'false'
// 	}]

function countModules() {
	return availableModules.length
}
countModules();

// Challange 3
// loop through array and count how many of the modules have the essetial flag set. make a new variable to count the number of essential modules and then build a loop.
 
function countEssential() {
	let essential = 0;
	for (modules in availableModules) {
		if (availableModules[modules].essential) {
			essential++;
		}
	}
	return essential;
}
countEssential(availableModules);

// Challange 4
// The first part of the challenge is to get the index of the module you want to load. In this case it's the "life-support" module.
// To get the index you need to loop over the availableModules array and find the module with a name-property which equals 'life-support'. If the name is a match you return the index.

// Once you have your index, you will use it as an argument in the loadModule function.
// In this function, the module to load equals availableModules[index].
// Before the module is loaded, it needs to be enabled. This means setting the module's enable property to true.
// Finally the enabled module is loaded into the ship.modules array. I simply added it to the end with the push method. My loadModule function doesn't have a return statement

// loop over availableModules to find the module called 'life support'
for (let i = 0; i < availableModules.length; i++) {
	// if (modules in availableModules == 'life-support') {
	// 	return 
	// }
	if (availableModules.findIndex('life-support')
	// if name is match
	// return its index
	// use it to call loadModule()
	loadModule();

}


	function loadModule(index) {
		// find module by its index, 
		availableModules[i];


		// set enabled property to true, 
		// add module to ships empty module array
		ship.modules.push(module);
	}
	
	
