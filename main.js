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