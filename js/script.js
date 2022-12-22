$(function () {
    $(".technique__item").slice(0, 15).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".technique__item:hidden").slice(0, 15).slideDown();
        if ($(".technique__item:hidden").length == 0) {
            $("#loadMore").remove();
        }
        // $('html,body').animate({
        //     scrollTop: $(this).offset().top
        // }, 1000);
    });

    $("[data-toggle=modal]").on('click', (e) => {
        e.preventDefault();
        $('.overlay').show();
    });

    $('.modal__close').on('click', (e) => {
        e.preventDefault();
        $('.overlay').hide();
    });
});


