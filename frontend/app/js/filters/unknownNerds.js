angular.module("app").filter('unknownNerds', function(NerdCacheService) {

  return function(nerds) {
    var ids,
    nerd,
    known;

    known = NerdCacheService.getKnown();
    ids = _.pluck(known, 'id');
    return _.reject(nerds, function(nerd) {
             if (_.contains(ids, nerd.id)) {
               return nerd;
             }
           });
  };
});