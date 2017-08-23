$(function () {
    $("#my-nav-bar").on("click", "a",function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var top = $(target).offset().top;
        $('html, body').animate({scrollTop: top}, 1000);
        return false;
    })
});