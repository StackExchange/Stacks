$(document).ready(function() {
    var addCodeButton = $(document).find("figure.highlight");
    var addTarget = $(document).find("td.code > pre");
    var button = "<button class='ps-absolute baw0 bar-sm t0 r0 p8 bg-black-900 fc-white c-pointer js-copy-code' role='button' title='Copy code'><svg class='svg-icon iconCopy' xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z'/><path d='M15 5H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z'/></svg></button>"

    //  Insert the copy button
    addCodeButton.prepend(button);

    //  Also add a class to the div we want to grab later
    addTarget.addClass("js-code-target");

    //  Copy code
    $(".js-copy-code").click(function(e) {
        e.stopPropagation;
        e.preventDefault;

        var codeTarget = $(this).closest("figure.highlight").find(".js-code-target");
        var code = codeTarget.text();

        console.log(code);
    })
});
