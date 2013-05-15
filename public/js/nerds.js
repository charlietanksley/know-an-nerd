$.ajax({
  url: 'api/nerds',
  method: 'get',
  async: true,
}).then(function(resp) {
  $.cache('nerds').set('all-nerds', resp);
});

