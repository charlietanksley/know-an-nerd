function NerdList() {
  // This is the main public function for this class
  this.showAllNerds = function() {
    return Display.render(this.element, { 'nerds': this.nerds });
  },

  this.showNerdNav = function() {
    var firstName,
    that;

    that = this;
    Display.render($('.filtered-list'), { 'nerds': Nerds.uniqueWithPictures() });
    $('.filter-list').on('click', function(e) {
      firstName = e.currentTarget.innerText;
      that.showSelectedNerds(firstName);
    });
  },

  this.showSelectedNerds = function(firstName) {
    Display.render(this.element, { 'nerds': Nerds.named(firstName) });

    $('#filter-list').on("click", function() {
      var nerdList = new NerdList;
      nerdList.showNerdNav();
    });
  },

  this.element = $('#list'),
  this.nerds = Nerds.allWithPictures()
};
