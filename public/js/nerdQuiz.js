function NerdQuiz() {
  this.presentQuestion = function() {
    Display.render(this.element, this.data());

    $('.answer').on("click", function(e) {
      var answer = e.currentTarget.innerHTML;
      var question = $.v.last(questions);
      var answerKey = new AnswerKey(question);

      answerKey.evaluate(answer);
    });
  },

  this.data = function() {
    var question, json;
    question = new Question(this.nerds);
    questions.push(question);

    json = { 'image': question.answer.image,
             'options': question.options };
    return json;
  },
  this.element = $('#quiz');
  this.nerds = Nerds.allWithPictures()
};
