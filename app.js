// this is a comment
/* my block comments
 * hear hear
 */

var getRandomNumber = function(scale) {
	var rand = Math.random();
	var ceiling = Math.ceil(rand * scale);
	var floor = Math.floor(rand * scale);
	var round = Math.round(rand * scale);

	console.log("The random number is: " + rand);
	console.log("The scale is: " + scale);
	console.log("The ceiling number is: " + ceiling);
	console.log("The floor number is: " + floor);
	console.log("The rounding number is: " + round);
};

getRandomNumber(10);
getRandomNumber(100);
getRandomNumber(1000);


for (i=0;i<10;i++) {
	console.log("loop count = " + i);
}