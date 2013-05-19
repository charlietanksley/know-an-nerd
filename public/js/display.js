var Display = {
  render: function(element, data) {
    $('#data').html(element.render(data));
  },

  updateUnknownCount: function() {
    $('#unknown-nerds').html(Nerds.unknownNerds().length.toString());
  }
};
