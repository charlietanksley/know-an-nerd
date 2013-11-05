listFunctions = {
  pairize: function(list) {
    var newList = [],
    pair = [];

    _.each(list, function(item) {
      if (pair.length === 0) {
        pair.push(item);
      } else if (pair.length === 1) {
        pair.push(item);
        newList.push(pair);
        pair = [];
      } else {
        throw new Error("Too many");
      }
    });
    return newList;
  }
};