$.domReady(function(){
  var nerds = [{'image': 'http://www.bignerdranch.com/images/headshots-white-bg/cbq.jpg', 'name': 'CBQ'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/aaron-hillegass.jpg', 'name': 'Aaron Hillegass'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/adam-premble.jpg', 'name': 'Adam Preble'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/agnes-mackintosh.jpg', 'name': 'Agnes Mackintosh'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/alex-silverman.jpg', 'name': 'Alex Silverman'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/andrew-lunceford.jpg', 'name': 'Andrew Lunsford'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/andy-lindeman.jpg', 'name': 'Andy Lindeman'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/aubrey-rhodes.jpg', 'name': 'Aubrey Rhodes'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/bill-phillips.jpg', 'name': 'Bill Phillips'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/placeholder.png', 'name': 'Bill Monk'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/bolot-kerimbaev.jpg', 'name': 'Bolot Kerimbaev'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/brandon-beacher.jpg', 'name': 'Brandon Beacher'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/brandy-porter.jpg', 'name': 'Brandy Porter'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/brian-gardner.jpg', 'name': 'Brian Gardner'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/brian-hardy.jpg', 'name': 'Brian Hardy'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/brian-harper.jpg', 'name': 'Brian Harper'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/brian-stanwyck.jpg', 'name': 'Brian Stanwyck'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/brian-turner.jpg', 'name': 'Brian Turner'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/charlie-cates.jpg', 'name': 'Charlie Cates'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/charlie-maffitt.jpg', 'name': 'Charlie Maffitt'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/charlie-tanksley.jpg', 'name': 'Charlie Tanksley'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/chris-aquino.jpg', 'name': 'Chris Aquino'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/chris-kelly.jpg', 'name': 'Chris Kelly'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/chris-moore.jpg', 'name': 'Chris Moore'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/chris-stewart.jpg', 'name': 'Chris Stewart'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/christian-keur.jpg', 'name': 'Christian Keur'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/daniel-rice.jpg', 'name': 'Daniel Rice'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/david-worth.jpg', 'name': 'David Worth'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/don-pottinger.jpg', 'name': 'Don Pottinger'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/emily-herman.jpg', 'name': 'Emily Herman'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/eric-jeffers.jpg', 'name': 'Eric Jeffers'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/placeholder.png', 'name': 'Felicia Harris'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/galvin-butler.jpg', 'name': 'Galvin Butler'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/gregg-rothmeier.jpg', 'name': 'Gregg Rothmeier'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/howard-vinings.jpg', 'name': 'Howard Vining'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/jami-sieder.jpg', 'name': 'Jami Sieder'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/jason-reece.jpg', 'name': 'Jason Reece'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/jason-russell.jpg', 'name': 'Jason Russell'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/jay-campbell.jpg', 'name': 'Jay Campbell'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/placeholder.png', 'name': 'Jay Hayes'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/placeholder.png', 'name': 'Jeff Heaton'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/jenn-green.jpg', 'name': 'Jenn Green'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/jeremy-matthews.jpg', 'name': 'Jeremy Sherman'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/jon-woodroof.jpg', 'name': 'Jon Woodroof'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/jonathan-blocksom.jpg', 'name': 'Jonathan Blocksom'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/jonathan-wallace.jpg', 'name': 'Jonathan Wallace'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/josh-skeen.jpg', 'name': 'Josh Skeen'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/juan-pablo-claude.jpg', 'name': 'Juan Pablo Claude'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/kurt-nelson.jpg', 'name': 'Kurt Nelson'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/kynerd-coleman.jpg', 'name': 'Kynerd Coleman'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/laura-cassell.jpg', 'name': 'Laura Cassell'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/leanne-boucher.jpg', 'name': 'Leanne Boucher'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/mark-dalrymple.jpg', 'name': 'Mark Dalrymple'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/placeholder.png', 'name': 'Matt Raufman'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/michael-ward.jpg', 'name': 'Michael Ward'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/nate-chandler.jpg', 'name': 'Nate Chandler'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/norbert-oortigoza.jpg', 'name': 'Norbert Oortigoza'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/owen-mathews.jpg', 'name': 'Owen Mathews'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/pamela-vickers.jpg', 'name': 'Pamela O. Vickers'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/patrick-vanstee.jpg', 'name': 'Patrick Van Stee'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/paul-turner.jpg', 'name': 'Paul Turner'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/placeholder.png', 'name': 'Richard Guy'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/rod-strougo.jpg', 'name': 'Rod Strougo'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/san-smith.jpg', 'name': 'San Smith'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/placeholder.png', 'name': 'Sara Kablack'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/placeholder.png', 'name': 'Sarah Koger'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/scott-markley.jpg', 'name': 'Scott Markley'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/scott-ritchie.jpg', 'name': 'Scott Ritchie'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/placeholder.png', 'name': 'Sean McCune'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/shannon-cobourn.jpg', 'name': 'Shannon Cobourn'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/stacy-moore.jpg', 'name': 'Stacy Moore'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/stafford-brooke.jpg', 'name': 'Stafford Brooke'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/step-christopher.jpg', 'name': 'Step Christopher'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/steve-marriott.jpg', 'name': 'Steve Marriott'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/steve-sparks.jpg', 'name': 'Steve Sparks'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/steve-harmon.jpg', 'name': 'Steven Harman'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/tasha-schroeder.jpg', 'name': 'Tasha Schroeder'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/thomas-ward.jpg', 'name': 'Thomas Ward'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/tj-usiyan.jpg', 'name': 'TJ Usiyan'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/todd-gandee.jpg', 'name': 'Todd Gandee'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/tomer-elmalem.jpg', 'name': 'Tomer Elmalem'},
               {'image': 'http://www.bignerdranch.com/images/headshots-white-bg/zac-stewart.jpg', 'name': 'Zac Stewart'}]

  // For some reason we Wings is being really pesky and forcing me to
  // render the template and *then* insert it into the dom.  This
  // function just makes that simpler.
  var render = function(element, data) {
    element.html(element.render(data));
  };

  $('#show-nerd-list').on("click", function() {
    $list = $('#nerd-list');
    $list.toggleClass('hidden');
    render($list, {'nerds':nerds});
  });

  $('#show-multiple-choice-quiz').on("click", function() {
    $quiz = $('#multiple-choice');
    $quiz.toggleClass('hidden');
  });
});
