$(".work li a").mousemove(function(e) {
  $(this).find("img").css("top",e.clientY+50+"px").css("left",e.clientX+350+"px");
})

$('.slides').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
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
