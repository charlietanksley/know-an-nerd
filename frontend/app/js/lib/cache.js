/* globals window */

extend('KnowAnNerd.Cache', function(storageLocation) {
  var Cache = {},
  storage = storageLocation || window.localStorage;

  Cache.get = function(key) {
    var item;
    item = localStorage.getItem(key);

    return item;
  };

  Cache.keys = {
    known: 'know-an-nerd-known'
  };

  Cache.set = function(key, value) {
    localStorage.setItem(key, value);

    return this;
  };

  return Cache;
});