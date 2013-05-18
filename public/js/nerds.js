var Nerds = {
  allWithPictures: function() {
    allNerds = $.cache('nerds').get('all-nerds');
    nerds = $.v.reject(allNerds, function(nerd) {
      if (nerd.id == 'placeholder') {
        return nerd;
      };
    });

    return nerds;
  },

  getAllNerds: function() {
    microAjax("api/nerds", function (resp) {
      $.cache('nerds').set('all-nerds', JSON.parse(resp), 86400000);
    });
  }
};


$.cache('nerds').get('all-nerds') || Nerds.getAllNerds()
