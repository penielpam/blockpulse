$(document).ready(function() {
    // Add a scroll event listener to the window
    $(window).scroll(function() {
        // Check the scroll position
        if ($(this).scrollTop() > 50) {
            // If scrolled more than 50 pixels, add a background color to the navbar
            $(".navbar").addClass("sticky-bg");
        } else {
            // Otherwise, remove the background color
            $(".navbar").removeClass("sticky-bg");
        }
    });
});