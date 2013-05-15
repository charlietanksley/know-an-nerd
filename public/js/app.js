$.domReady(function(){
  var nerds;

  var render = function(element, data) {
    $('#data').html(element.render(data));
  };

  $('#show-nerd-list').on("click", function() {
    nerds = $.cache('nerds').get('all-nerds');
    Views.showList();
    makeNerdList();
  });


  $('#show-quiz').on("click", function() {
    nerds = $.cache('nerds').get('all-nerds');
    renderNewQuiz();
    makeNerdQuiz();
  });

  function makeNerdList() {
    var $data = $('#data');
    if ($data.hasClass('nerd-quiz')) {
      $data.removeClass('nerd-quiz');
    }

    if (!$data.hasClass('nerd-list')) {
      $data.addClass('nerd-list');
    }
  };

  function makeNerdQuiz() {
    var $data = $('#data');
    if ($data.hasClass('nerd-list')) {
      $data.removeClass('nerd-list');
    }

    if (!$data.hasClass('nerd-quiz')) {
      $data.addClass('nerd-quiz');
    }
  };

  function renderNewQuiz() {
    var question,
    quiz,
    quizData;

    question = new Question(nerds);

    quizData = {
      'image':question.answer.image,
      'options':question.options};

    Views.showQuiz(quizData);

    quiz = new Quiz(question);
    quiz.run();
  };

  var Views = {
    showList: function() {
      $list = $('#nerd-list');
      render($list, {'nerds':nerds});
    },

    showQuiz: function(quiz) {
      $quiz = $('#multiple-choice');
      render($quiz, quiz);
    }
  };

  var Question = function(theNerds) {
    this.options = rara.randomSubset(theNerds, 4);
    this.answer = rara.randomMember(this.options);

    this.check = function(answer) {
      return answer == this.answer.name;
    };
  };

  var Quiz = function(question) {
    this.run = function() {
      var $data,
      newQuestion,
      output,
      result;


      $('.answer').on("click", function(e) {
        answer = e.currentTarget.innerHTML;
        if (question.check(answer)) {
          result = "Success!";
        } else {
          result = "Learn a nerd!";
        };

        output = "<p id='guess-result'>" + result + "</p><button id='next-question' class='new-quiz'>Try another?</button>";
        $data = $('#data');
        $data.html(output);

        $('.new-quiz').on("click", function() {
          renderNewQuiz();
        });
      });
    }
  };
});
