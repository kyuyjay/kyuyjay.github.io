$('#home-a').on("click", function() {
    $('#nav-a').addClass("active");
    $('.link-a').addClass("disabled");
    $('.content-a').collapse("show");
});

$('#home-p').on("click", function() {
    $('#nav-p').addClass("active");
    $('.content-project').collapse("show");
});

$('#home-c').on("click", function() {
    $('#nav-c').addClass("active");
    $('.link-c').addClass("disabled");
    $('.content-c').collapse("show");
});

$('.link-a').on("click", function() {
    $('.content-p').removeClass("show");
    $('.content-c').removeClass("show");
    $('#nav-a').addClass("active");
    $('#nav-p').removeClass("active");
    $('#nav-c').removeClass("active");
    $('.link-a').addClass("disabled");
    $('.link-p').removeClass("disabled");
    $('.link-c').removeClass("disabled");

    $('.content-a').collapse('show');
});

$('.aidhub').on("click", function() {
    $('.content-project').removeClass("show");
    $('.content-a').removeClass("show");
    $('.content-c').removeClass("show");
    $('#nav-p').addClass("active");
    $('#nav-a').removeClass("active");
    $('#nav-c').removeClass("active");
    $('.link-a').removeClass("disabled");
    $('.link-c').removeClass("disabled");

    $('.content-carma').removeClass("show");
    $('.content-fairshare').removeClass("show");
    $('.aidhub').addClass("disabled");
    $('.carma').removeClass("disabled");
    $('.fairshare').removeClass("disabled");

    $('.content-aidhub').collapse('show');
});

$('.carma').on("click", function() {
    $('.content-project').removeClass("show");
    $('.content-a').removeClass("show");
    $('.content-c').removeClass("show");
    $('#nav-p').addClass("active");
    $('#nav-a').removeClass("active");
    $('#nav-c').removeClass("active");
    $('.link-a').removeClass("disabled");
    $('.link-c').removeClass("disabled");

    $('.content-aidhub').removeClass("show");
    $('.content-fairshare').removeClass("show");
    $('.carma').addClass("disabled");
    $('.aidhub').removeClass("disabled");
    $('.fairshare').removeClass("disabled");

    $('.content-carma').collapse('show');
});

$('.fairshare').on("click", function() {
    $('.content-project').removeClass("show");
    $('.content-a').removeClass("show");
    $('.content-c').removeClass("show");
    $('#nav-p').addClass("active");
    $('#nav-a').removeClass("active");
    $('#nav-c').removeClass("active");
    $('.link-a').removeClass("disabled");
    $('.link-c').removeClass("disabled");

    $('.content-aidhub').removeClass("show");
    $('.content-carma').removeClass("show");
    $('.fairshare').addClass("disabled");
    $('.aidhub').removeClass("disabled");
    $('.carma').removeClass("disabled");

    $('.content-fairshare').collapse('show');
});

$('.link-c').on("click", function() {
    $('.content-a').removeClass("show");
    $('.content-p').removeClass("show");
    $('#nav-c').addClass("active");
    $('#nav-a').removeClass("active");
    $('#nav-p').removeClass("active");
    $('.link-c').addClass("disabled");
    $('.link-a').removeClass("disabled");
    $('.link-p').removeClass("disabled");

    $('.content-c').collapse('show');
});
