function getAllNerds() {
  microAjax("api/nerds", function (resp) {
    $.cache('nerds').set('all-nerds', JSON.parse(resp), 86400000);
  });
}

$.cache('nerds').get('all-nerds') || getAllNerds()
