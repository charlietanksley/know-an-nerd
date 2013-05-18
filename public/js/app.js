$.domReady(function(){
  $('#show-nerd-list').on("click", function() {
    var nerdList = new NerdList;
    nerdList.showAllNerds();
  });

  $('#show-quiz').on("click", function() {
    var nerdQuiz = new NerdQuiz;
    nerdQuiz.presentQuestion();
  });

  $('#unknown-nerds').html(Nerds.unknownNerds().length.toString());
});
