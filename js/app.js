$.domReady(function(){
  // For some reason we Wings is being really pesky and forcing me to
  // render the template and *then* insert it into the dom.  This
  // function just makes that simpler.
  var render = function(element, data) {
    element.html(element.render(data));
  };
});
