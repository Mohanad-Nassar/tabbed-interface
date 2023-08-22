(function () {

    'use strict';

    $("#tabs > ul > li > a ").click(function (event) {
        event.preventDefault;
        // next we will select all the tabs and default their color and background
        $("#tabs > ul > li > a ").css({
            background: "#A2A2A2",
            color: " #cecece",
        });
        // and only the one is clicked will have a different style
        $(this).css({ background: "#eaeaea", color: " #333" });

        const thisTab = $(this).attr("href"); // we saved the id of each story as it has the same name as the link

        $("#tabs > div:visible").slideUp(400, function () {
            $(thisTab).slideDown(400);
            // now we replace the content and add some animation for interactivity. 
        });
    });
}());