// Random Array methods
var Rara = function() {
  this.randomIndex = function(array) {
    return Math.floor((Math.random() * array.length));
  };

  this.insertRandomly = function(item, array) {
    array.splice(Math.floor((Math.random() * array.length)), 0, item);
    return array;
  };

  this.randomMember = function(array) {
    return array[this.randomIndex(array)];
  };

  // It would be nice if this returned a unique subset if possible
  this.randomSubset = function(array, count) {
    var i,
    result;

    result = [];
    for (i=0; i < count; i++) {
      result.push(this.randomMember(array));
    };

    return result;
  };
};

var rara = new Rara();
