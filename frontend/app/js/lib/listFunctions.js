listFunctions = {
  pairize: function(list) {
    var newList = [[]];


    _.each(list, function(item) {
      var last = _.last(newList);

      if (last.length < 2) {
        last.push(item);
      } else {
        newList.push([item]);
      }
    });
    return newList;
  }
};