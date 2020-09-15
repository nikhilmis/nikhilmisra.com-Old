$(".work li a").mousemove(function(e) {
  $(this).find("img").css("top",e.clientY+50+"px").css("left",e.clientX+350+"px");
})

$(".work li a").on("mouseover", function() {
  const firstItem = $(this).find(".work-items");
  const lastItem = $(this).find(".work-item-end");
  const underlineWidth = lastItem.offset().left - firstItem.offset().left;
  document.documentElement.style.setProperty('--underline-width', `${underlineWidth}px`);
})

$('.slides').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: true,
  nextArrow: "<div class='slick-next'><div class='cursor-arrow'></div></div>",
  prevArrow: "<div class='slick-prev'><div class='cursor-arrow'></div></div>",
});

$(".slick-arrow").mousemove(function(e) {
  $(this).find(".cursor-arrow").css("top",e.clientY+"px").css("left",e.clientX+"px");
})

var waypoint = new Waypoint({
  element: $('#project'),
  handler: function(direction) {
    if (direction == "down") {
      $( "header" ).addClass( "invert" );
    } else {
      $( "header" ).removeClass( "invert" );
    }
  },
  offset: $('header').innerHeight()
})
