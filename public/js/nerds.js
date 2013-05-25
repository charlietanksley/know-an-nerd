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

  named: function(firstName) {
    var first;

    return $.v.filter(this.allWithPictures(), function(nerd) {
      first = nerd.name.match(/[\S]*/)[0];
      if (firstName == first) {
        return nerd;
      };
    });
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

  uniqueWithPictures: function() {
    var all,
    firstNames,
    firstNamesFinder,
    nerds;

    all = this.allWithPictures();

    firstNames = $.v.map(all, function(nerd) {
      return nerd.name.match(/[\S]*/)[0];
    });

    return $.v.map($.v.uniq(firstNames), function(nerd) {
      return { 'name':nerd };
    });
  },

  unknownNerds: function() {
    return $.cache('nerds').get('unknown-nerds') ||
      $.cache('nerds').set('unknown-nerds', this.allWithPictures());
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
