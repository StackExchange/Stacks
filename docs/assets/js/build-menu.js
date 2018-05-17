/*  Build Menu
    Based on jquery.tokko v0.1.6 by Juho Vepsalainen, 2013-03-09

    This version adds in additional class name values if you want to
    assign menu or grid class names.

    Also fixed an error if a header contained nonalphanumberic characters
    such as parantheses.
*/

(function ($) {
  const HEADERS = ".stacks-section > :header:not(h1)"

  const ClassName = {
    MENU        : "stacks-nav--subnav",
    MENU_ITEM   : "stacks-nav--item",
    MENU_LINK   : "stacks-nav--link fs-body1"
  }

  const GridClass = {
    GRID_BOX    : "grid",
    GRID_COL    : "fd-column",
    GRID_CELL   : "grid--cell"
  }

  function buildMenu($parent, options) {
    var $headers = $(HEADERS).map(function() {
      var $e = $(this);
      var depth = parseInt($e.prop("tagName").slice(1), 10);
      var text = $e.text();
      var id = $e.attr("id");

      if (!id) {
        id = assignId(text);
        $e.attr("id",id);
      }

      var $a = $("<a>", {"class": options.anchor["class"], href: "#" + id}).html(options.anchor.content).appendTo($e);

      return {
        text: text,
        id: id,
        depth: depth
      };
    });

    var prevDepth = $headers[0].depth;
    var $parents = [$parent];
    var $prev;

    $headers.each(function(i,v) {
      if (v.depth > prevDepth) {
        $parents.push($("<ul>", { "class": ClassName.MENU + " " + GridClass.GRID_BOX + " " + GridClass.GRID_COL }).appendTo($prev));
      } else if (v.depth < prevDepth) {
        $parents.pop();
      }

      $prev = $li(v.text, v.id).appendTo(last($parents));

      prevDepth = v.depth;
    });
  }

  function $li(val,id) {
    var $e = $("<li>", { "class": ClassName.MENU_ITEM + " " + GridClass.GRID_BOX + " " + GridClass.GRID_COL });
    $("<a>", { "class": GridClass.GRID_CELL + " " + ClassName.MENU_LINK, href: "#" + id}).text(val).appendTo($e);

    return $e;
  }

  function assignId(val) {
    return val.toLowerCase().replace(/[\W_]/g,"-").replace(/[\W_]/g,"");
  }

  function last(arr) {
    return arr[arr.length - 1];
  }

  $.fn.buildMenu = function(options) {
    if(!this.length) return console.error("No element provided to buildMenu!");

    return this.each(function() {
      buildMenu($(this), options(options));
    });

    function options(o) {
      return $.extend(true, {
        anchor: {
          "class": GridClass.GRID_BOX + " " + "grid__center stacks-header--anchor",
          content: "<svg role='icon' class='svg-icon iconLink' width='18' height='18' viewBox='0 0 18 18'><path d='M2.9 9c0-1.16.94-2.1 2.1-2.1h3V5H5C2.79 5 1 6.79 1 9s1.79 4 4 4h3v-1.9H5A2.1 2.1 0 0 1 2.9 9zM13 5h-3v1.9h3a2.1 2.1 0 1 1 0 4.2h-3V13h3c2.21 0 4-1.79 4-4s-1.79-4-4-4zm-7 5h6V8H6v2z'/></svg>"
        }
      }, o);
    }
  };
})(jQuery);
