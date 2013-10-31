extend('KnowAnNerd.Names', function() {
  var Names = {};

  Names.firstName = function(nerd) {
    return this.split(nerd.name)[0];
  };

  Names.lastName = function(nerd) {
    var names = this.split(nerd.name);
    console.log(names);
    console.log(names.length);
    if (names.length > 1) {
      return names[1];
    } else {
      return names[0];
    }
  };

  Names.split = function(name) {
    return name.split(' ');
  };

  return Names;
});

extend('KnowAnNerd.Sort', {
  firstName: function(nerds) {
    return _.sortBy(nerds, function(nerd) {
             return KnowAnNerd.Names().firstName(nerd);
           });
  },

  lastName: function(nerds) {
    return _.sortBy(nerds, function(nerd) {
             return KnowAnNerd.Names().lastName(nerd);
           });
  }
});
