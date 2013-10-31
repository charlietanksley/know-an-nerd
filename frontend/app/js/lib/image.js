extend('KnowAnNerd.Image', {
  basename: function(url) {
    var regex = /.*\/(.*)\.(?:jpg|png)$/;
    matchData = url.match(regex);
    return matchData[1];
  },

  isPlaceholder: function(nerd) {
    return this.basename(nerd.image) === 'placeholder';
  },

  onlyPlaceholders: function(nerd) {
    if (this.isPlaceholder(nerd)) {
      return nerd;
    }
  }
});
