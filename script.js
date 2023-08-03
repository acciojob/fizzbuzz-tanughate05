//your JS code here. If required.

const FizzBuzz2 = function() {
	const arr = [];
	arr.length = 20;
	for(let i = 1; i <= arr.length; i++) {
		arr[i-1] = ((i % 3) ? '' : 'Fizz') + ((i % 5) ? '' : 'Buzz') || i;
	}
	return arr.join(', ');
};

console.log(FizzBuzz2());
