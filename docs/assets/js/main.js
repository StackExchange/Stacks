$(function() {
    var search = docsearch({
        apiKey: '09d35fa9def5c025244d5b217778a652',
        indexName: 'stackoverflow_design',
        inputSelector: '#searchbox',
        debug: false
    });

    // Kill default behavior on empty links
    $("a[href='#']").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
});

function regenerateMenu () {
    // Build the submenu on initial page load
    var sections = $('.stacks-section > :header');
    var subnav = $(".js-secondary-nav");

    // Kill the subnav and rebuild it
    subnav.empty();

    if ( sections.length ) {
        subnav.buildMenu()
    }
}

$.when($.ready).then(function() {
    regenerateMenu();

    window.history.replaceState({
        'href': window.location.href,
        'title': $('head').filter('title').text(),
        'nav': $(document).find('#nav').html(),
        'content': $(document).find('#content').html(),
    }, '', window.location.href)

    $('#nav').on('click', 'a', function (event) {

        // Allow opening links in new tabs
        if (event.metaKey) {
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

        regenerateMenu();
    }
})
