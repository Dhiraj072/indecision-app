// arguments object is no longer bound with arrow functions
const add = (a, b) => {
	// console.log(arguments);
	return a + b;
};

console.log(add(1, 2, 3));

// this keyword is no longer bound
const user = {
	name: 'Dhiraj',
	cities: ['Singapore', 'Delhi', 'Jodhpur'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
	}
};

console.log(user.printPlacesLived());

const multiplier = {
	numbers: [1, 2, 3],
	multiplyBy: 2,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());