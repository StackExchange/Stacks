$(document).ready(function() {
    // Cache some variables
    var navigation = $(".js-navigation");
    var closeIcon = $(".js-hamburger-close-icon");
    var hamburgerIcon = $(".js-hamburger-icon");

    // Disable any empty links
    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });

    function regenerateMenu () {
        // Hide the navigation if we've opened it
        hamburgerIcon.removeClass("d-none");
        closeIcon.addClass("d-none");
        navigation.addClass("md:d-none");
    }

    function killEmptyLinks() {
        // Kill default behavior on empty links
        $("a[href='#']").on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
    }

    $.when($.ready).then(function() {
        regenerateMenu();
        killEmptyLinks();

        window.history.replaceState({
            'href': window.location.href,
            'title': $('head').filter('title').text(),
            'nav': $(document).find('#nav').html(),
            'content': $(document).find('#content').html(),
        }, '', window.location.href)

        $('#nav').on('click', 'a', function (event) {

            // Allow opening links in new tabs
            if (event.metaKey || event.ctrlKey) {
              return
            }

            // Prevent following link
            event.preventDefault()

            // Get desired link
            var href = $(this).attr('href')

            // Make Ajax request to get the page content
            $.ajax({
              method: 'GET',
              url: href,
              cache: false,
              dataType: 'html',
            }).done(function(html) {

                // Parse the HTML response
                var title = $(html).filter('title').text()
                var nav = $(html).find('#nav').html()
                var content = $(html).find('#content').html()

                // Update the page
                $('head title').text(title)
                $('#nav').html(nav)
                $('#content').html(content)

                // Scroll to the top of the page
                $(document).scrollTop(0)

                regenerateMenu();
                killEmptyLinks();

                // Add page load to browser history
                window.history.pushState({
                    'href': href,
                    'title': title,
                    'nav': $(html).find('#nav').html(),
                    'content': $(html).find('#content').html(),
                }, '', href)
            })
        })

        window.onpopstate = history.onpushstate = function(e) {
            if(e.state){
                // Update the page
                $('title').text(e.state.title)
                $('#nav').html(e.state.nav)
                $('#content').html(e.state.content)
            }
        }
    });
});
