var Nerds = {
  allNerds: function() {
    return $.cache('nerds').get('all-nerds');
  },

  withoutPictures: function() {
    var nerds;
    nerds = $.v.filter(this.allNerds(), function(nerd) {
      if (nerd.id == 'placeholder') {
        return nerd;
      };
    });

    return nerds;
  },

  allWithPictures: function() {
    var nerds;
    nerds = $.v.reject(this.allNerds(), function(nerd) {
      if (nerd.id == 'placeholder') {
        return nerd;
      };
    });

    return nerds;
  },

  unknownNerds: function() {
    return $.cache('nerds').get('unknown-nerds') ||
      $.cache('nerds').set('unknown-nerds', Nerds.allWithPictures());
  },

  setUnknownNerds: function(nerds) {
    $.cache('nerds').set('unknown-nerds', nerds);
  },

  clearUnknownNerds: function() {
    $.cache('nerds').set('unknown-nerds', this.allNerds());
  },

  getAllNerds: function() {
    microAjax("api/nerds", function (resp) {
      $.cache('nerds').set('all-nerds', JSON.parse(resp), 86400000);
    });
  }
};

$.cache('nerds').get('all-nerds') || Nerds.getAllNerds()
