var UIkit = {
  init: function() {
    var sections = $('.stacks-section > :header');
    if ( sections.length ) {
      $(".js-secondary-nav").buildMenu();
    }
  },
}

$(function() {
  UIkit.init();
});
