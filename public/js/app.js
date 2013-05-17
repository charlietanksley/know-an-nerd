$.domReady(function(){
  var nerds;

  var Views = function() {
    this.showList = function() {
      $list = $('#nerd-list');
      this.render($list, {'nerds':nerds});
    };

    this.showQuiz = function(quiz) {
      $quiz = $('#multiple-choice');
      this.render($quiz, quiz);
    };

   this.render = function(element, data) {
     $('#data').html(element.render(data));
   };
  };

  var NerdList = function() {
  };

  $('#show-nerd-list').on("click", function() {
    var views = new Views;

    allNerds = $.cache('nerds').get('all-nerds');
    nerds = $.v.reject(allNerds, function(nerd) {
      if (nerd.id == 'placeholder') {
        return nerd;
      };
    });
    views.showList();
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
    quizData,
    views;

    question = new Question(nerds);

    quizData = {
      'image':question.answer.image,
      'options':question.options};

    views = new Views;
    views.showQuiz(quizData);

    quiz = new Quiz(question);
    quiz.run();
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
