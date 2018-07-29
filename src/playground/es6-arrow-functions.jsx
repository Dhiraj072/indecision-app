// Arrow function
function square(x) {
	return x*x;
};

const squareArrow = (x) => {
	return x*x;
};

const sqArConcise = (x) => x*x;

// console.log(square(9));
// console.log(sqArConcise(10));
// console.log(squareArrow(9));

// Challenge
const getFirstName = (fullName) => fullName.split(' ')[0];

const getFirstNameD = (fullName) => {
	return fullName.split(' ')[0];
};


console.log(getFirstName('Dhiraj Bhatt'));