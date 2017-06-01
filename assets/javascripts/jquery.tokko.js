/*! jquery.tokko - v0.1.6 - Juho Vepsalainen - MIT
 - 2013-03-09 */
(function ($) {
    function tokko($parent, opts) {
        var $headers = $('.uikit-section > :header').map(function() {
            var $e = $(this);
            var depth = parseInt($e.prop('tagName').slice(1), 10);

            var text = $e.text();
            var id = $e.attr('id');

            if ( !id ) {
            	id = idfy(text);
            	$e.attr('id',id);
            }

            var $a = $('<a>', {'class': opts.anchor['class'], href: '#' + id}).
                html(opts.anchor.content).appendTo($e);


            return {
                text: text,
                id: id,
                depth: parseInt($e.prop('tagName').slice(1), 10)
            };
        });
        var prevDepth = $headers[0].depth;
        var $parents = [$parent];
        var $prev;

        $headers.each(function(i, v) {
            if(v.depth > prevDepth) {
            	$parents.push($('<ul>').appendTo($prev));
            } else if (v.depth < prevDepth) {
            	$parents.pop();
            }

            $prev = $li(v.text, v.id).appendTo(last($parents));

            prevDepth = v.depth;
        });
    }

    function $li(val, id) {
        var $e = $('<li>');
        $('<a>', {href: '#' + id}).text(val).appendTo($e);

        return $e;
    }

    function idfy(val) {
        return val.toLowerCase().replace(/[ \-]+/g, '_').replace(/\.+/g, '');
    }

    function last(arr) {
        return arr[arr.length - 1];
    }

    $.fn.tokko = function(options) {
        if(!this.length) return console.error('No element provided to tokko!');

        return this.each(function() {
            tokko($(this), opts(options));
        });

        function opts(o) {
            return $.extend(true, {
                anchor: {
                    'class': 'anchor',
                    content: '&para;'
                }
            }, o);
        }
    };
})(jQuery);