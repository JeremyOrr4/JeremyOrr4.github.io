var path = window.location.pathname;
var page = path.split("/").pop();

$(document).ready(function() {
    if (page == "AboutMe.html" || page == "ContactMe.html"){
        $("canvas").addClass("CanvasSinglePage");
    }
});