var UIkit = {
  init: function() {
    this.setMinHeightForPreviews();     // this functions lets you set min-height for .stack-preview by setting 'data-minheight' attribute. useful for elements that are positioned absolutely.
    this.visibleCodebase();          // it lets you select which patterns you gonna see by using <select> in sidebar.
    this.filesStructure();          // simple function for styling that checks if element has children
    this.toggleSubMenu();
    this.scrollSpy();

    var sections = $('.stacks-section > :header');
    if ( sections.length ) {
      $(".js-secondary-nav").buildMenu();
    }

    setTimeout(function() {
      if (location.hash) {
        var h = $(location.hash).offset().top;
          window.scrollTo(0, h);
      }
    }, 500); // lol this is bad
  },


  setMinHeightForPreviews: function() {
    $('.stacks-section .-preview[data-minheight]').each(function() {
      var minheight = $(this).data('minheight');
      $(this).css('min-height', minheight);
    });
  },

  visibleCodebase: function() {
    $('select#uikit-codebase').on('change', function() {
      var current = $(this).val(),
        el = $('#uikit-content > section');
      localStorage.setItem('whatCodebase', current);

      switch (current) {
          case '0': // Both
              el.show();
              break;
          case '1': // Only Core
              el.hide().filter('[data-core]').show();
              break;
          case '2': // Core and common
              el.hide().filter(':not([data-careers])').show();
              break;
          case '3': // Careers
              el.hide().filter('[data-careers]').show();
              break;
          case '4': // Careers and common
              el.hide().filter(':not([data-core])').show();
              break;
      }
    });

    if(localStorage.whatCodebase) {
      $('select#uikit-codebase').val(localStorage.getItem('whatCodebase')).trigger('change');
    }
  },

  filesStructure: function() {
    var li = $('.tree-structure').find('li:has(ul)');
    li.each(function() {
      $(this).addClass('has-children');
    });
  },

  toggleSubMenu: function() {
    $(".js-subnav-toggle").on("click", function(e) {
      e.preventDefault();

      $(".js-subnav-menu").removeClass("ut-ds-none").addClass("ut-ds-none");
      $(".js-subnav-section").removeClass("is-open");

      $(this).parent().parent(".js-subnav-section").addClass("is-open");
      $(this).parent().next(".js-subnav-menu").toggleClass("ut-ds-none");
    });
  },

  scrollSpy: function() {
    $("body").scrollspy({ target: "#stacks-subnav"})
  }
}

$(function() {
  UIkit.init();
});
