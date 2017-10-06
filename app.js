// this is a comment
/* my block comments
 * hear hear
 */

var obj = require ("./score.js");

console.log(obj);

var score = obj.myhandler;

score.addGrade(100);
score.addGrade(90);
score.addGrade(85);
score.addGrade(96);
score.addGrade(95.5);

console.log("Total Grades are: " + score.getTotalGrades());
console.log("Average Grades is: " + score.getAverage());
