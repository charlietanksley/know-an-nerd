var Question = function(theNerds) {
  this.options = rara.randomSubset(theNerds, 4);
  this.answer = rara.randomMember(this.options);

  this.check = function(answer) {
    return answer == this.answer.name;
  };
};

var Quiz = function(question) {
  this.run = function() {
    $('.answer').on("click", function(e) {
      answer = e.currentTarget.innerHTML;
      if (question.check(answer)) {
        $('#guess-result').html("Success!")
      } else {
        $('#guess-result').html("Learn a nerd!")
      };
    });
  }
};
