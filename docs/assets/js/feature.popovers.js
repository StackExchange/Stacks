$(document).ready(function() {
    var popoverBtn = $(".js-popover-btn");
    var popoverExample = $(".js-popover-example");

    popoverBtn.click(function(e) {
        popoverExample.toggleAttrVal("aria-hidden", "true", "false");
    });
});

// jquery toggle just the attribute value
$.fn.toggleAttrVal = function(attr, val1, val2) {
    var test = $(this).attr(attr);
    if ( test === val1) {
      $(this).attr(attr, val2);
      return this;
    }
    if ( test === val2) {
      $(this).attr(attr, val1);
      return this;
    }
    // default to val1 if neither
    $(this).attr(attr, val1);
    return this;
};
