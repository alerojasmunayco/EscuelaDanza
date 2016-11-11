var heightWindow;
var url;

$(document).ready(function () {

    var windowHeight = $(window).height() - 600;

    $(window).scroll(function () {
        if ($(this).scrollTop() >= windowHeight) {
            $("nav.navbar").addClass("with-bg");
        } else {
            $("nav.navbar").removeClass("with-bg");
        }
    });
});

