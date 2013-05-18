function NerdList() {
  // This is the main public function for this class
  this.showAllNerds = function() {
    return Display.render(this.element, { 'nerds': this.nerds });
  },

  this.element = $('#list'),
  this.nerds = Nerds.allWithPictures()
};
