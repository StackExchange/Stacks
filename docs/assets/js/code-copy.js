$(document).ready(function() {
    var addCodeButton = $(document).find("figure.highlight");
    var addTarget = $(document).find("td.code > pre");
    var button = "<button class='ps-absolute baw0 bar-sm t0 r0 p8 bg-black-900 fc-white c-pointer js-copy-code' role='button' title='Copy code'><svg class='svg-icon iconCopy' xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z'/><path d='M15 5H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z'/></svg></button>";
    var toast = "<aside class='s-toast js-toast-popup'><div class='s-notice js-toast-notice' role='status' aria-hidden='true'><div class='grid jc-space-between ai-center'><div class='grid--cell js-toast-copy'></div><div class='grid ai-center'><svg aria-hidden='true' class='svg-icon iconClearSm native' width='14' height='14' viewBox='0 0 14 14'><path d='M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z'></path></svg></div></div></div></aside>";
    var toastTypes = "s-notice__info s-notice__success s-notice__warning s-notice__danger";
    var clipboard = new ClipboardJS(".js-copy-code");

    //  Insert the copy button
    addCodeButton.prepend(button);

    //  Also add a class to the div we want to grab later
    addTarget.addClass(function() {
        var codeButton = $(this).closest("figure.highlight").find(".js-copy-code");
        var code = $(this).text();

        $(this).addClass("js-code-target");
        codeButton.attr("data-clipboard-text",code);
    });

    //  Copy code
    clipboard.on("success", function(e) {
        $("body").prepend(toast);
        $(".js-toast-notice").removeClass(toastTypes).addClass("s-notice__success");
        $(".js-toast-copy").text("Copied to clipboard");
        $(".js-toast-popup").queue(function() {
            $(this).attr("aria-hidden","false").dequeue();
        })
        .delay(3000)
        .queue(function(e) {
            $(this).attr("aria-hidden","true").dequeue();
        });
    });
    clipboard.on("error", function(e) {
        console.log(e);
    });
});
