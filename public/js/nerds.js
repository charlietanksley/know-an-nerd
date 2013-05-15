function getAllNerds() {
  $.ajax({
    url: 'api/nerds',
    method: 'get',
    async: true,
  }).then(function(resp) {
    $.cache('nerds').set('all-nerds', resp, 86400000);
  });
}

$.cache('nerds').get('all-nerds') || getAllNerds()

