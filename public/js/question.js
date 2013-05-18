function Question(theNerds) {
  this.options = rara.randomSubset(theNerds, 4);
  this.answer = rara.randomMember(this.options);

  this.check = function(answer) {
    return answer == this.answer.name;
  };
};

var questions = new Array;
