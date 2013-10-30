angular.module("app").service("NerdCacheService", function() {
  var cache = KnowAnNerd.Cache(),
  keys = KnowAnNerd.Cache().keys,
  known;

  getKnown = function() {
    var items;
    items = cache.get(keys.known);

    if (_.isNull(items)) {
      return [];
    } else {
      return JSON.parse(items);
    }
  };

  return {
    getKnown: getKnown
  };
});