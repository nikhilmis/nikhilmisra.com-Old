$('.slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    dots: true,
    nextArrow: "<div class='slick-next'><div class='cursor-arrow'></div></div>",
    prevArrow: "<div class='slick-prev'><div class='cursor-arrow'></div></div>",
});

$('.slick-arrow').mousemove(function (e) {
    $(this)
        .find('.cursor-arrow')
        .css('top', e.clientY + 'px')
        .css('left', e.clientX + 'px');
});
