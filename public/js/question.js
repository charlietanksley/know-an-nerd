function Question(unknownNerds, allNerds) {
  this.otherOptions = rara.randomSubset(allNerds, 3);
  this.answer = rara.randomMember(unknownNerds);
  this.options = rara.insertRandomly(this.answer, this.otherOptions);

  this.check = function(answer) {
    return answer == this.answer.name;
  };
};

var questions = new Array;
