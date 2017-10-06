/**
 * this is the object created to calculate the scores
 */
var score = {
	scores: [],
	addGrade: function(newGrade) {
		this.scores.push(newGrade);
	},
	getTotalGrades: function() {
		var total=0;
		for (i=0;i<this.scores.length;i++) {
			total +=this.scores[i];
		}
		return total;
	},
	getAverage: function() {
		return this.getTotalGrades()/this.scores.length; 
	},
};

exports.myhandler = score;
exports.name="Lei Zhu";
