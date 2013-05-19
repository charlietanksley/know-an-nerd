function AnswerKey(question) {
  this.question = question,
  this.status = undefined,

  this.evaluate = function(answer) {
    this.status = this.question.check(answer);
    this.updateCounters();
    this.next();
  },

  this.next = function() {
    var element,
    output,
    result;

    if (this.status) {
      result = "Success!";
    } else {
      result = "Learn a nerd!";
    };

    output = "<p id='guess-result'>" + result + "</p><button id='next-question' class='new-quiz'>Try another?</button>";
    $data = $('#data');
    $data.html(output);

    $('.new-quiz').on("click", function() {
      var nerdQuiz = new NerdQuiz;
      nerdQuiz.presentQuestion();
    });
  },

  this.updateCounters = function() {
    if (this.status) {
      var answerId,
      that,
      unknownNerds;

      that = this;
      unknownNerds = $.v.reject(Nerds.unknownNerds(), function(nerd) {
        answerId = that.question.answer.id
        if (nerd.id == answerId) {
          return nerd;
        }
      });

      Nerds.setUnknownNerds(unknownNerds);
      Display.updateUnknownCount();

      return this;
    }
  }
}
